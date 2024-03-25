import os
from typing import Annotated

from fastapi import FastAPI, Form, HTTPException, Request
from pydantic import BaseModel
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
if not SENDGRID_API_KEY:
    raise Exception("SENDGRID_API_KEY is not set in environment variables")

CONTACT_FORM_RECIPIENT = "giridhar.r.nair@gmail.com"

email_template = """
Someone has filled out the contact form on the CYC UT Dallas website. Here are the details:<br>
<br>
Email: {}<br>
<br>
Subject: {}<br>
<br>
Message: {}<br>
"""

confirmation_email_content = """
Thank you for contacting Consult Your Community UT Dallas. We have received your message and will get back to you as soon as possible.<br>
<br>
Best regards,<br>
Consult Your Community UT Dallas Team
"""


class ContactForm(BaseModel):
    email: str
    subject: str
    message: str


def send_email(recipient: str, subject: str, content: str):
    try:
        message = Mail(
            from_email="cyccontactform@gmail.com",
            to_emails=recipient,
            subject=subject,
            html_content=content
        )
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/health")
def hello_world():
    return {"status": "healthy"}


@app.post("/api/contact-form")
@limiter.limit("1/minute")
async def contact_form(email: Annotated[str, Form()], subject: Annotated[str, Form()], message: Annotated[str, Form()], request: Request):
    try:
        send_email(
            recipient=CONTACT_FORM_RECIPIENT,
            subject="New Inquiry from CYC Website",
            content=email_template.format(email, subject, message)
        )
        send_email(
            recipient=email,
            subject="Thank you for contacting CYC UT Dallas",
            content=confirmation_email_content
        )
        
        return {"message": "Emails sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

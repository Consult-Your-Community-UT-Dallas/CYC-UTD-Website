import os
from typing import Annotated

from fastapi import FastAPI, Form, HTTPException, Depends
from pydantic import BaseModel
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = FastAPI()

SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
CONTACT_FORM_RECIPIENT = "utdallas@consultyourcommunity.org"

email_template = """
You've received a new inquiry via our website's contact form. Below are the details:<br>
<br>
Email: {}<br>
<br>
Subject: {}<br>
<br>
Message: {}<br>
"""

confirmation_email_content = """
Thank you for contacting CYC UT Dallas. We have received your message and will get back to you shortly.<br>
<br>
Best regards,<br>
CYC Team
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
async def contact_form(email: Annotated[str, Form()], subject: Annotated[str, Form()], message: Annotated[str, Form()]):
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

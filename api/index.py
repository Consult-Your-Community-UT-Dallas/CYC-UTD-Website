from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/api/health")
def hello_world():
    return {"message": "Hello World"}

@app.post("/api/submit")
async def submit_form():
    raise HTTPException(status_code=501, detail="Feature under development")

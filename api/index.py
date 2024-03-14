from fastapi import FastAPI

app = FastAPI()

@app.get("/api/health")
def hello_world():
    return {"message": "Hello World"}
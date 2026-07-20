from fastapi import FastAPI
from datetime import datetime
import random
import time

app = FastAPI(
    title="TraceMind AI",
    description="An AI SRE Built with SigNoz",
    version="1.0.0",
)


@app.get("/")
async def root():
    return {
        "project": "TraceMind AI",
        "status": "Running",
        "timestamp": datetime.utcnow().isoformat(),
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "backend",
    }


@app.get("/api/v1/demo")
async def demo():
    delay = random.uniform(0.1, 1.5)
    time.sleep(delay)

    return {
        "message": "Demo endpoint",
        "response_time": f"{delay:.2f}s",
    }


@app.get("/api/v1/error")
async def error():
    raise Exception("Intentional Hackathon Error")

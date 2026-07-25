from datetime import datetime
import asyncio
import logging
import random

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from telemetry.instrumentation import instrument_app
from app.ai.analyzer import analyze_incident
from app.ai.copilot import generate_response

logger = logging.getLogger("tracemind")

app = FastAPI(
    title="TraceMind AI",
    description="An AI SRE Built with SigNoz",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

instrument_app(app)


# ----------------------------
# Request Models
# ----------------------------

class CopilotRequest(BaseModel):
    question: str


# ----------------------------
# Routes
# ----------------------------

@app.get("/")
async def root():
    logger.info("Root endpoint called")

    return {
        "project": "TraceMind AI",
        "status": "Running",
        "timestamp": datetime.utcnow().isoformat(),
    }


@app.get("/health")
async def health():
    logger.info("Health endpoint called")

    return {
        "status": "healthy",
        "service": "backend",
    }


@app.get("/api/v1/demo")
async def demo():

    logger.info("Incoming request")

    db_delay = random.uniform(0.10, 0.80)
    await asyncio.sleep(db_delay)

    logger.info("Database query completed")

    api_delay = random.uniform(0.20, 1.20)
    await asyncio.sleep(api_delay)

    logger.info("External API call completed")

    total = db_delay + api_delay

    logger.info(f"Request finished in {total:.2f}s")

    return {
        "message": "Demo endpoint",
        "response_time": f"{total:.2f}s",
        "database_delay": f"{db_delay:.2f}s",
        "api_delay": f"{api_delay:.2f}s",
    }


@app.get("/api/v1/error")
async def error():

    logger.error("Database connection timeout")

    await asyncio.sleep(0.5)

    raise Exception("Intentional Hackathon Error")


@app.get("/api/v1/load")
async def load():

    logger.info("Load simulation started")

    total = 0

    for _ in range(5):
        delay = random.uniform(0.20, 0.70)
        await asyncio.sleep(delay)
        total += delay

    logger.info("Load simulation finished")

    return {
        "status": "completed",
        "duration": round(total, 2),
    }


@app.get("/api/v1/analyze")
async def analyze():

    sample_metrics = {
        "latency": random.uniform(0.2, 2.5),
        "error_rate": random.uniform(0, 0.25),
        "cpu": random.randint(20, 100),
    }

    return analyze_incident(sample_metrics)


@app.get("/api/v1/metrics")
async def metrics():

    return {
        "cpu": random.randint(25, 95),
        "memory": random.randint(30, 90),
        "latency": round(random.uniform(0.2, 2.4), 2),
        "requests": random.randint(50, 500),
        "errors": random.randint(0, 15),
    }


@app.get("/api/v1/status")
async def status():

    return {
        "uptime": "99.98%",
        "services": 4,
        "healthy": True,
        "environment": "Production",
    }


@app.post("/api/v1/copilot")
async def copilot(request: CopilotRequest):

    analysis = analyze_incident(
        {
            "latency": random.uniform(0.2, 2.5),
            "error_rate": random.uniform(0, 0.25),
            "cpu": random.randint(20, 100),
        }
    )

    return generate_response(request.question, analysis)
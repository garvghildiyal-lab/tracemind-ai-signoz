# 🧠 TraceMind AI

An AI-powered Site Reliability Engineering (SRE) platform built with **SigNoz** for real-time observability, incident analysis, and intelligent troubleshooting.

---

## 🚀 Features

- 📊 Real-time observability dashboard
- 🤖 AI SRE Analysis
- 🧠 AI Copilot for incident assistance
- 📈 Live response time and system activity charts
- 📋 Incident Timeline
- 🔍 Distributed tracing with SigNoz
- 📜 Centralized logging
- 📡 Metrics monitoring
- ⚡ FastAPI backend with React frontend

---

## 🏗️ Architecture

```text
          React Frontend
                │
                ▼
         FastAPI Backend
                │
        OpenTelemetry SDK
                │
                ▼
        OpenTelemetry Collector
                │
                ▼
             SigNoz
        ├── Traces
        ├── Logs
        └── Metrics
```

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- FastAPI
- Python
- Pydantic

### Observability
- SigNoz
- OpenTelemetry
- Docker

---

## 📸 Dashboard

> Add screenshots here.

### Main Dashboard

![Dashboard](screenshots/dashboard.png)

### SigNoz Traces

![Traces](screenshots/traces.png)

### AI Copilot

![Copilot](screenshots/copilot.png)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/garvghildiyal-lab/tracemind-ai-signoz.git
cd tracemind-ai-signoz
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8001
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📊 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/health` | Backend health |
| `/api/v1/demo` | Demo endpoint |
| `/api/v1/load` | Load simulation |
| `/api/v1/error` | Error simulation |
| `/api/v1/analyze` | AI incident analysis |
| `/api/v1/metrics` | System metrics |
| `/api/v1/status` | Service status |
| `/api/v1/copilot` | AI Copilot |

---

## 🎯 Demo

Showcase includes:

- Dashboard
- AI Analysis
- AI Copilot
- Incident Timeline
- SigNoz Traces
- Logs
- Metrics

---


# TraceMind AI: An AI SRE Assistant Built with SigNoz

TraceMind AI is an AI-powered Site Reliability Engineering (SRE) assistant that combines application observability with AI-based analysis to help developers understand system behaviour, detect issues, and reduce debugging time.

The project uses **SigNoz** and **OpenTelemetry** to collect and analyze telemetry data including traces, metrics, and logs. It provides a modern dashboard for monitoring application health, performance, and incidents along with an AI Copilot for system analysis.

---

## 🚀 Problem Statement

Modern applications generate large amounts of operational data. When something goes wrong, developers often need to manually inspect logs, metrics, and traces to understand the root cause.

TraceMind AI aims to simplify this process by combining:

- Real-time monitoring
- Observability data
- Incident tracking
- AI-assisted analysis

into a single developer-focused platform.

---

# ✨ Features

## 📊 Real-Time System Monitoring

- Live backend health monitoring
- Request activity tracking
- Response time monitoring
- Error tracking
- Automatic health updates

---

## 🔍 Observability with SigNoz

TraceMind AI integrates with SigNoz for:

- Distributed traces
- Application metrics
- Logs
- Service monitoring
- Performance analysis

OpenTelemetry is used to collect telemetry data from the application and send it to SigNoz.

---

## 🤖 AI Copilot

The built-in AI Copilot helps developers analyze system behaviour.

Example queries:

```
Analyze system health
```

```
Why is latency increasing?
```

The Copilot provides insights that help developers understand possible issues faster.

---

## 📈 Monitoring Dashboard

The React dashboard provides:

- System status indicator
- KPI cards
- Response time visualization
- System activity charts
- Incident timeline
- AI analysis panel

---

# 🏗️ Architecture

```
                React Dashboard
                       |
                       |
                FastAPI Backend
                       |
                       |
          OpenTelemetry Instrumentation
                       |
                       |
                    SigNoz
                       |
        -------------------------------
        |             |               |
      Traces       Metrics          Logs
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- JavaScript
- CSS
- Axios
- Lucide Icons

## Backend

- FastAPI
- Python
- Uvicorn

## Observability

- SigNoz
- OpenTelemetry
- Docker

## AI Layer

- AI Copilot for incident analysis

---

# 📂 Project Structure

```
tracemind-ai-signoz/

│
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── theme/
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

# ⚙️ Running Locally

## Prerequisites

Install:

- Node.js
- Python 3.12+
- Docker

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv .venv
```

Activate:

Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8001
```

Backend runs at:

```
http://localhost:8001
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔌 API Endpoints

## Health Check

```
GET /health
```

Returns current application health status.

---

## Demo Endpoint

```
GET /api/v1/demo
```

Generates application activity for monitoring.

---

## Error Simulation

```
GET /api/v1/error
```

Creates an intentional error for testing observability workflows.

---

# 📡 SigNoz Integration

TraceMind AI uses OpenTelemetry to generate telemetry data from the backend application.

Collected signals:

### Traces

Used to understand:

- Request flow
- Latency
- Service behaviour
- Failures

### Metrics

Used to monitor:

- Application performance
- Request patterns
- System behaviour

### Logs

Used for:

- Debugging
- Error investigation
- Additional context

SigNoz provides the interface to analyze these signals together.

---

# 🧠 Key Learnings

Building TraceMind AI helped explore:

- Practical application observability
- OpenTelemetry instrumentation
- Trace-based debugging
- Building monitoring dashboards
- Combining AI assistance with developer workflows

One important lesson was that observability is not only about collecting data. The real value comes from providing enough context to understand why something happened.

---

# 🔮 Future Improvements

Future versions could include:

- Automated anomaly detection
- AI-generated incident reports
- Alert integration
- Advanced root cause analysis
- Multi-service tracing
- Cloud deployment

---

# 📌 Project Links

GitHub:

https://github.com/garvghildiyal-lab/tracemind-ai-signoz

---

**🌐 Live Demo**  
https://tracemind-ai-signoz.vercel.app

# 👨‍💻 Author

Garv Ghildiyal

Built for the SigNoz Hackathon: Agents of SigNoz

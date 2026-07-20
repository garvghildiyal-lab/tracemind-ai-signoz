# TraceMind AI: An AI SRE Built with SigNoz

## Hackathon

**WeMakeDevs × SigNoz Hackathon 2026**

**Track:** AI & Agent Observability

---

# Vision

Modern applications generate thousands of logs, metrics, and traces every minute. During production incidents, developers often spend valuable time switching between dashboards, searching logs, and correlating traces to identify the root cause.

TraceMind AI is an AI-powered Site Reliability Engineer that leverages SigNoz and OpenTelemetry to investigate incidents automatically. Instead of simply displaying observability data, it analyzes telemetry, explains what happened, identifies possible root causes, and recommends actionable next steps backed by evidence.

---

# Problem Statement

Debugging production issues is often slow because engineers must manually correlate multiple observability signals.

Common questions include:

- Why is my API slow?
- Which service caused the failure?
- What changed recently?
- Which endpoint is generating errors?
- What evidence supports the root cause?

Finding these answers manually can significantly increase incident resolution time.

---

# Solution

TraceMind AI combines:

- **OpenTelemetry** for instrumentation
- **SigNoz** for observability
- **AI reasoning** for incident investigation

The application analyzes telemetry collected by SigNoz, including:

- Traces
- Metrics
- Logs

Based on this data, it generates:

- Incident summaries
- Root cause analysis
- Evidence-backed explanations
- Actionable recommendations

---

# Target Users

- Software Developers
- DevOps Engineers
- Site Reliability Engineers (SREs)
- Students learning observability

---

# Core Features

## 1. Real-Time Application Monitoring

Monitor the health of services using live telemetry collected through OpenTelemetry and visualized in SigNoz.

---

## 2. Distributed Tracing

Track complete request flows across the application to quickly identify latency bottlenecks and failures.

---

## 3. Metrics Dashboard

Visualize key performance indicators such as:

- Request throughput
- Error rate
- Response latency
- System health

---

## 4. Centralized Logging

Search and correlate logs with traces to simplify debugging.

---

## 5. AI Incident Investigator

Analyze telemetry and answer questions such as:

> "Why is the checkout service responding slowly?"

The AI provides:

- Incident Summary
- Root Cause
- Supporting Evidence
- Recommended Actions
- Confidence Score

---

## 6. Incident Report Generator

Automatically generate structured incident reports that summarize:

- Timeline
- Affected services
- Root cause
- Impact
- Suggested remediation

---

## 7. AI Health Score

Generate an overall health score for the application based on multiple observability signals.

---

# Technology Stack

## Frontend

- Next.js
- Tailwind CSS

## Backend

- FastAPI

## Observability

- SigNoz
- OpenTelemetry

## Database

- PostgreSQL (SQLite may be used during early development if appropriate)

## Containerization

- Docker

## Deployment

- Foundry

## AI

- OpenAI-compatible Large Language Model

---

# High-Level Architecture

```
                User
                  │
                  ▼
          Next.js Frontend
                  │
                  ▼
           FastAPI Backend
                  │
      ┌───────────┴────────────┐
      ▼                        ▼
OpenTelemetry           AI Investigation Engine
      │                        │
      ▼                        │
    SigNoz  ◄──────────────────┘
      │
      ▼
 Dashboards • Alerts • Reports
```

---

# Development Milestones

## Milestone 1 – Foundation

- Set up FastAPI backend
- Set up Next.js frontend
- Configure Docker
- Create initial API endpoints
- Establish project structure

---

## Milestone 2 – Observability

- Instrument the application using OpenTelemetry
- Integrate with SigNoz
- Collect traces, metrics, and logs
- Build monitoring dashboards
- Configure alerts

---

## Milestone 3 – AI Investigation

- Build the AI investigation engine
- Analyze telemetry data
- Generate root cause analysis
- Produce incident summaries
- Recommend actionable fixes

---

## Milestone 4 – Finalization

- Polish the user interface
- Optimize performance
- Prepare documentation
- Capture screenshots
- Record the demo
- Publish the technical blog
- Perform final testing and submission

---

# Success Criteria

The completed project should demonstrate:

- OpenTelemetry instrumentation
- SigNoz integration
- Distributed tracing
- Metrics collection
- Centralized logging
- Interactive dashboards
- Alerting
- AI-powered incident investigation
- Automated incident reporting

---

# Stretch Goals

If time permits, additional features may include:

- Slack notifications
- GitHub issue creation
- Multi-service monitoring
- Natural language observability queries
- Voice-based incident investigation

---

# Expected Outcome

TraceMind AI aims to reduce the time required to investigate production incidents by transforming raw observability data into clear, evidence-backed insights. By combining SigNoz, OpenTelemetry, and AI reasoning, the project demonstrates how observability can become more intelligent, actionable, and accessible for modern engineering teams.

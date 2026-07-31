import { useEffect, useRef, useState } from "react";
import axios from "axios";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import MetricsChart from "./components/MetricsChart";
import KPICards from "./components/KPICards";
import AIAnalysis from "./components/AIAnalysis";
import IncidentTimeline from "./components/IncidentTimeline";
import Copilot from "./components/Copilot";

import "./App.css";

const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8001";

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const dashboardRef = useRef(null);
  const metricsRef = useRef(null);
  const analyticsRef = useRef(null);
  const copilotRef = useRef(null);
  const incidentsRef = useRef(null);
  const settingsRef = useRef(null);

  const [metrics, setMetrics] = useState({
    requests: 0,
    response: 0,
    errors: 0,
    status: "Checking...",
  });

  const [chartData, setChartData] = useState([]);

  const [analysis, setAnalysis] = useState(
    "Analyzing system behaviour..."
  );

  const [incidents, setIncidents] = useState([]);

  async function fetchHealth() {
    try {
      const res = await axios.get(`${API}/health`);

      setMetrics({
        requests: Math.floor(Math.random() * 500),
        response: Math.floor(Math.random() * 300),
        errors: Math.floor(Math.random() * 5),
        status:
          res.data.status?.toLowerCase() === "healthy"
            ? "Healthy"
            : "Offline",
      });

      setChartData((prev) => [
        ...prev.slice(-9),
        {
          time: new Date().toLocaleTimeString(),
          value: Math.floor(Math.random() * 300),
        },
      ]);

      setAnalysis(
        "System is operating normally. No critical anomalies detected."
      );

      setIncidents((prev) => [
        ...prev.slice(-9),
        {
          time: new Date().toLocaleTimeString(),
          message: "Health check passed",
        },
      ]);
    } catch {
      setMetrics({
        requests: 0,
        response: 0,
        errors: 100,
        status: "Offline",
      });

      setAnalysis(
        "Backend service unavailable. Check logs and traces."
      );

      setIncidents((prev) => [
        ...prev,
        {
          time: new Date().toLocaleTimeString(),
          message: "Backend health check failed",
        },
      ]);
    }
  }

 useEffect(() => {
  fetchHealth();
  const timer = setInterval(fetchHealth, 5000);
  return () => clearInterval(timer);
}, []);


useEffect(() => {

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          setActiveSection(entry.target.id);

        }

      });

    },

    {

      threshold: 0.35,

      rootMargin: "-120px 0px -45% 0px",

    }

  );

  [
    dashboardRef,
    metricsRef,
    analyticsRef,
    copilotRef,
    incidentsRef,
    settingsRef,

  ].forEach((ref) => {

    if (ref.current) {

      observer.observe(ref.current);

    }

  });

  return () => observer.disconnect();

}, []);


  

const scrollTo = (ref) => {

  setActiveSection(ref.current.id);

  ref.current?.scrollIntoView({

    behavior:"smooth",

    block:"start",

  });

};

  setActiveSection(ref.current.id);

};

  return (
    <div className="dashboard-layout">

      <Sidebar
        active={activeSection}
        scrollTo={{
          dashboard: () => scrollTo(dashboardRef),
          metrics: () => scrollTo(metricsRef),
          analytics: () => scrollTo(analyticsRef),
          copilot: () => scrollTo(copilotRef),
          incidents: () => scrollTo(incidentsRef),
          settings: () => scrollTo(settingsRef),
        }}
      />

      <main className="main-content">

        <Navbar />

        <section
          ref={dashboardRef}
          id="dashboard"
          className="hero"
        >
          <div className="hero-header">

            <div>

              <h1>TraceMind AI</h1>

              <p>
                Enterprise AI Observability Platform powered by SigNoz
              </p>

            </div>

            <span
              className={`status-pill ${
                metrics.status === "Healthy"
                  ? "status-online"
                  : "status-offline"
              }`}
            >
              {metrics.status === "Healthy"
                ? "🟢 Healthy"
                : "🔴 Offline"}
            </span>

          </div>
        </section>

        <section
          ref={metricsRef}
          id="metrics"
        >
          <KPICards metrics={metrics} />
        </section>

        <section
          ref={analyticsRef}
          id="analytics"
          className="charts"
        >

          <MetricsChart
            title="Response Time"
            data={chartData}
            color="#3b82f6"
          />

          <MetricsChart
            title="System Activity"
            data={chartData}
            color="#22c55e"
          />

        </section>

        <div className="grid">

          <div className="left-panel">

            <section
  id="analytics"
  ref={analyticsRef}
>
  <AIAnalysis analysis={analysis} />
</section>

            <section
  id="analysis"
>
  <AIAnalysis analysis={analysis} />
</section>

            <section
              id="settings"
              ref={settingsRef}
              className="analysis-card"
            >
              <h3>⚙ Settings</h3>

              <p>Coming Soon</p>

              <ul style={{ marginTop: 15 }}>
                <li>Theme Customization</li>
                <li>Notification Preferences</li>
                <li>Alert Rules</li>
                <li>Cloud Integrations</li>
              </ul>

            </section>

          </div>

          <div
            className="right-panel"
            ref={copilotRef}
            id="copilot"
          >
            <Copilot />
          </div>

        </div>

      </main>

    </div>
  );
}
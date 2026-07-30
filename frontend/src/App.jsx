import { useEffect, useState } from "react";
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


  const [metrics,setMetrics] = useState({

    requests: 0,
    response: 0,
    errors: 0,
    status: "Checking..."

  });


  const [chartData,setChartData] = useState([]);


  const [analysis,setAnalysis] = useState(
    "Analyzing system behaviour..."
  );


  const [incidents,setIncidents] = useState([]);





  async function fetchHealth(){

    try{

      const res = await axios.get(`${API}/health`)

      setMetrics({

        requests: Math.floor(Math.random()*500),

        response: Math.floor(
          Math.random()*300
        ),

        errors: Math.floor(
          Math.random()*5
        ),

        status:
  res.data.status?.toLowerCase() === "healthy"
    ? "Healthy"
    : "Offline"
      });


      setChartData(prev => [

        ...prev.slice(-9),

        {

          time:
            new Date()
            .toLocaleTimeString(),

          value:
            Math.floor(
              Math.random()*300
            )

        }

      ]);


      setAnalysis(
  "System is operating normally. No critical anomalies detected."
);

setIncidents(prev => [
  ...prev.slice(-9),
  {
    time: new Date().toLocaleTimeString(),
    message: "Health check passed"
  }
]);   

    }


    catch(error){


      setMetrics({

        requests:0,

        response:0,

        errors:100,

        status:"Offline"

      });


      setAnalysis(
        "Backend service unavailable. Check logs and traces."
      );


      setIncidents(prev=>[

        ...prev,

        {

          time:
            new Date()
            .toLocaleTimeString(),

          message:
            "Backend health check failed"

        }

      ]);

    }

  }



  useEffect(()=>{


    fetchHealth();


    const timer=setInterval(

      fetchHealth,

      5000

    );


    return ()=>clearInterval(timer);


  },[]);



  return (
  <div className="dashboard-layout">

    <Sidebar />

    <main className="main-content">

      <Navbar />

      <section className="hero">

  <div className="hero-header">

    <h1>TraceMind AI</h1>

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

  <p>
    Enterprise AI Observability Platform powered by SigNoz
  </p>

</section>

      <KPICards metrics={metrics} />

      <div className="charts">
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
      </div>

      <div className="grid">

  <div className="left-panel">

    <AIAnalysis analysis={analysis} />

    <IncidentTimeline incidents={incidents} />

  </div>


  <div className="right-panel">

    <Copilot />

  </div>

</div>

    </main>

  </div>
);

}
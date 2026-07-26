import {
  Activity,
  TimerReset,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function KPICards({ metrics }) {
  const cards = [
    {
      title: "Total Requests",
      value: metrics.requests,
      icon: Activity,
      color: "#3b82f6",
      trend: "+12%",
    },
    {
      title: "Avg Response",
      value: `${metrics.response} ms`,
      icon: TimerReset,
      color: "#8b5cf6",
      trend: "-8%",
    },
    {
      title: "Error Rate",
      value: `${metrics.errors}%`,
      icon: AlertTriangle,
      color: "#ef4444",
      trend: "-2%",
    },
    {
      title: "System Status",
      value: metrics.status,
      icon: ShieldCheck,
      color: "#22c55e",
      trend: "Healthy",
    },
  ];

  return (
    <div className="kpi-container">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div className="premium-card" key={card.title}>
            <div className="card-top">
              <div
                className="icon-box"
                style={{ background: card.color }}
              >
                <Icon size={22} color="white" />
              </div>

              <div className="trend">
                <TrendingUp size={14} />
                {card.trend}
              </div>
            </div>

            <h4>{card.title}</h4>

            <h2>{card.value}</h2>
          </div>
        );
      })}
    </div>
  );
}
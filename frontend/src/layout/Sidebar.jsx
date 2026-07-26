import {
  LayoutDashboard,
  Activity,
  BarChart3,
  Bot,
  AlertTriangle,
  Settings,
} from "lucide-react";

const items = [
  ["Dashboard", LayoutDashboard],
  ["Metrics", Activity],
  ["Analytics", BarChart3],
  ["AI Copilot", Bot],
  ["Incidents", AlertTriangle],
  ["Settings", Settings],
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">

        <div className="logo-icon">🧠</div>

        <div>
          <h2>TraceMind</h2>
          <p>AI Observability</p>
        </div>

      </div>

      <div className="menu">

        {items.map(([name, Icon]) => (

  <div
    key={name}
    className={`menu-item ${name === "Dashboard" ? "active" : ""}`}
  >

    <Icon size={18} />

    <span>{name}</span>

  </div>

))}

      </div>

    </aside>
  );
}
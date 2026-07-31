import {
  LayoutDashboard,
  Activity,
  BarChart3,
  Bot,
  AlertTriangle,
  Settings,
} from "lucide-react";

const items = [
  {
    id: "dashboard",
    title: "Dashboard",
    subtitle: "Overview",
    icon: LayoutDashboard,
  },
  {
    id: "metrics",
    title: "Metrics",
    subtitle: "Performance",
    icon: Activity,
  },
  {
    id: "analytics",
    title: "Analytics",
    subtitle: "AI Insights",
    icon: BarChart3,
  },
  {
    id: "copilot",
    title: "AI Copilot",
    subtitle: "Assistant",
    icon: Bot,
  },
  {
    id: "incidents",
    title: "Incidents",
    subtitle: "Timeline",
    icon: AlertTriangle,
  },
  {
    id: "settings",
    title: "Settings",
    subtitle: "Coming Soon",
    icon: Settings,
  },
];

export default function Sidebar({
  active,
  scrollTo,
}) {

  return (

    <aside className="sidebar">

      <div className="logo">

        <div className="logo-icon">
          🧠
        </div>

        <div>

          <h2>TraceMind</h2>

          <p>AI Observability</p>

        </div>

      </div>

      <div className="menu">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <button

              key={item.id}

              onClick={scrollTo[item.id]}

              className={`menu-item ${
                active === item.id
                  ? "active"
                  : ""
              }`}

            >

              <Icon size={20} />

              <span>

                {item.title}

                <small>

                  {item.subtitle}

                </small>

              </span>

            </button>

          );

        })}

      </div>

      <div className="sidebar-footer">

        <div className="footer-card">

          <h4>

            TraceMind AI

          </h4>

          <p>

            AI-powered observability platform
            built with SigNoz &
            OpenTelemetry.

          </p>

        </div>

      </div>

    </aside>

  );

}
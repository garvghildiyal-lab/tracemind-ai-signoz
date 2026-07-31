import { Search, Bell, Moon } from "lucide-react";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="search">
          <Search size={18} />
          <input placeholder="Search metrics, traces, logs..." />
        </div>

      </div>

      <div className="navbar-right">

        <div className="system-status">
          <span className="status-dot"></span>
          System Healthy
        </div>

        <button
          className="icon-btn"
          onClick={toggleTheme}
        >
          <Moon size={18} />
        </button>

        <button className="icon-btn">
          <Bell size={18} />
        </button>

      </div>

    </header>
  );
}
import { Search, Sun, Moon, Bell } from "lucide-react";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar() {

  const { theme, toggleTheme } = useTheme();

  return (

    <div className="navbar">

      <div className="navbar-left">

        <div className="search">

          <Search size={18} />

          <input placeholder="Search traces, logs, metrics..." />

        </div>

      </div>

      <div className="navbar-right">

        <div className="system-status">

          <span className="status-dot"></span>

          System Healthy

        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >

          <button className="icon-btn">

            <Bell size={20} />

          </button>

          <button
            className="icon-btn"
            onClick={toggleTheme}
          >

            {theme === "dark"
              ? <Sun size={20}/>
              : <Moon size={20}/>
            }

          </button>

        </div>

      </div>

    </div>

  );

}
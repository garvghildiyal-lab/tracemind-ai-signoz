import { Search, Sun, Moon, Bell } from "lucide-react";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar() {

const { theme, toggleTheme } = useTheme();

return (

<div className="navbar">

<div className="search">

<Search size={18}/>

<input placeholder="Search traces..." />

</div>

<div className="nav-right">

<div className="system-status">
  <span className="status-dot"></span>
  System Healthy
</div>

<Bell/>

<button onClick={toggleTheme}>

{theme==="dark" ? <Sun/> : <Moon/>}

</button>

</div>

</div>

);

}
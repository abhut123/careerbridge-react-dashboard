import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="cb-sidebar">
      <h2 className="logo">CareerBridge</h2>

      <ul>
        <li className="active" onClick={() => navigate("/dashboard")}>🏠 Dashboard</li>
        <li onClick={() => navigate("/skills")}>🛠 My Skills</li>
        <li>📉 Skill Gap</li>
        <li>🎓 Internships</li>
        <li>📊 Progress</li>
        <li>👤 Profile</li>
      </ul>

      <button className="logout-btn">Logout</button>
    </div>
  );
}

export default Sidebar;

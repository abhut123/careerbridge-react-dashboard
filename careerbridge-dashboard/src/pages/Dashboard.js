import DashboardLayout from "../components/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="cb-dashboard">

        {/* KPI Ribbon */}
        <div className="kpi-ribbon">
          <div>🎯 Career Score <b>78%</b></div>
          <div>⏳ Internship Ready in <b>14 days</b></div>
          <div>🚀 Next Goal: <b>React + Node</b></div>
        </div>

        {/* Stats Cards */}
        <div className="cb-stats">
          <div className="cb-card">
            <p>Skills Added</p>
            <h2>8</h2>
            <span className="up">+2 this month</span>
          </div>

          <div className="cb-card">
            <p>Skill Gaps</p>
            <h2>3</h2>
            <span className="down">Needs focus</span>
          </div>

          <div className="cb-card">
            <p>Recommended Courses</p>
            <h2>5</h2>
            <span className="up">Personalized</span>
          </div>

          <div className="cb-card">
            <p>Internship Applications</p>
            <h2>2</h2>
            <span className="neutral">In review</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button>➕ Add Skill</button>
          <button>📊 Analyze Skill Gap</button>
          <button>📚 View Learning Path</button>
        </div>

        {/* Lower Section */}
        <div className="cb-lower">

          {/* Career Progress */}
          <div className="cb-box">
            <h3>Career Goal Progress</h3>
            <p>Frontend Developer Readiness</p>

            <div className="goal-bar">
              <div className="goal-fill"></div>
            </div>

            <span className="progress-text">78% Completed</span>
          </div>

          {/* Career Insight */}
          <div className="cb-box highlight">
            <h3>Career Insight</h3>
            <p>
              Complete <b>2 more skills</b> to become eligible for
              <b> Web Developer Internship</b>.
            </p>
            <button>View Skill Roadmap</button>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="activity-feed">
          <h3>Recent Activity</h3>
          <ul>
            <li>✅ Added skill: React</li>
            <li>📊 Skill gap analyzed</li>
            <li>🎓 Course recommended: Node.js</li>
            <li>📩 Internship applied</li>
          </ul>
        </div>

        {/* Smart Tip */}
        <div className="empty-hint">
          💡 Tip: Completing React + Node increases internship chances by <b>40%</b>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
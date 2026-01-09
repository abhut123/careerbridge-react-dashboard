import DashboardLayout from "../components/DashboardLayout";

function MySkills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 65 },
    { name: ".NET", level: 60 },
  ];

  return (
    <DashboardLayout>
      <div className="skills-page">
        <h2>My Skills</h2>
        <p className="sub-text">Your current skill proficiency</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MySkills;

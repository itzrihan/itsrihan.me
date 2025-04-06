import './styles/Skills.css';

const skills = [
  { name: 'C/C++', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript/TypeScript', level: 88 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 82 },
  { name: 'REST API Design', level: 90 },
  { name: 'MongoDB', level: 80 },
  { name: 'MySQL', level: 75 },
  { name: 'Firebase', level: 78 },
  { name: 'Generative AI', level: 70 },
  { name: 'DSA', level: 95 },
  { name: 'Problem Solving', level: 96 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const mySkils=[
  {
    skill : 'HTML 5',
    level : 'Advanced',
    emoji : '💪',
    color : "pink"
  },
  {
    skill : 'CSS',
    level : 'Advanced',
    emoji : '💪',
    color : "#82A6A7"
  },
  {
    skill : 'JavaSripts',
    level : 'Intermediate',
    emoji : '😃',
    color : "#AFA7B9"
  },
  {
    skill : 'C',
    level : 'Intermediate',
    emoji : '😃',
    color : "skyblue"
  },
  {
    skill : 'JAVA',
    level : 'Begginer',
    emoji : '🙁',
    color : "yellow"
  },
  {
    skill : 'C++',
    level : 'Intermediate',
    emoji : '😃',
    color : "blue"
  },
  {
    skill : ' MySQL',
    level : 'Intermediate',
    emoji : '😃',
    color : "#B09AA9"
  },
  {
    skill : ' WordPress',
    level : 'Advanced',
    emoji : '💪',
    color : "green"
  },
  {
    skill : ' React',
    level : 'Begginer',
    emoji : '🙁',
    color : "#8FAEB3"
  },
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="pawan.jpg" alt="pawan" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Pawan Sarap</h1>
      <p>Frotn end developer and wordpress Developer</p>
    </div>
  );
}

function SkillList() {
  const skillObj = mySkils;

  return (
    <div className="skill-list">
   { 
    skillObj.map((skills) => (
      <Skill skill={skills.skill} emoji={skills.emoji} color={skills.color} />
    ))}
    </div> 
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

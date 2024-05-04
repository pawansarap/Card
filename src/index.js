import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const mySkils = [
  {
    skill: "HTML 5",
    level: "Advanced",
    color: "pink",
  },
  {
    skill: "CSS",
    level: "Advanced",
    color: "#82A6A7",
  },
  {
    skill: "JavaSripts",
    level: "Intermediate",
    color: "#AFA7B9",
  },
  {
    skill: "C",
    level: "Intermediate",
    color: "skyblue",
  },
  {
    skill: "JAVA",
    level: "Beginner",
    color: "yellow",
  },
  {
    skill: "C++",
    level: "Intermediate",
    color: "blue",
  },
  {
    skill: " MySQL",
    level: "Intermediate",
    color: "#B09AA9",
  },
  {
    skill: " WordPress",
    level: "Advanced",
    color: "green",
  },
  {
    skill: " React",
    level: "Beginner",
    color: "#8FAEB3",
  },
];

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
      <img src=".../pawan.jpg" alt="pawan" className="avatar" />
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
  return (
    <div className="skill-list">
      {mySkils.map((skills) => (
        <Skill
          skill={skills.skill}
          level={skills.level}
          color={skills.color}
          key={skills.skill}
        />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>
        {props.level === "Advanced" && "💪"}
        {props.level === "Intermediate" && "👍"}
        {props.level === "Beginner" && "👌"}
      </span>
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

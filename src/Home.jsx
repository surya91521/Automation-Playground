import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ComponentButton from "./ComponentButton";

const components = [
  { name: "MODAL", path: "modal" },
  { name: "ALERT", path: "alert" },
  { name: "IFRAME", path: "iframe" },
  { name: "SHADOWDOM", path: "shadowdom" },
  { name: "TYPE TEXT", path: "typetext" },
  { name: "DROPDOWNS", path: "dropdowns" },
  { name: "NEW TAB", path: "newtab" },
  { name: "RADIO BUTTONS", path: "radiobutton" },
  { name: "LOOPING", path: "looping" },
  { name: "FILE UPLOAD", path: "fileupload" },
  // Add more components as needed
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <h1>Welcome to Automation Playground!</h1><br></br>
        <p>Use this website to test your Low Code Automation tool.</p>
        <p> As it has various cases and many types of elements on which you can validate the proficiency of your tool.</p>
        <br></br>
        <br></br>
        <br></br>
      </header>
      <div className="components">
        {components.map((component, index) => (
          <ComponentButton
            key={index}
            label={component.name}
            ariaLabel={`Test for ${component.name.toLowerCase()}`}
            dataTest={`component-${index}`}
            onClick={() => navigate(`/component/${component.path}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

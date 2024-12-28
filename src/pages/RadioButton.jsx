import React, { useState } from "react";
import "../styles/radiobutton.css";

function RadioButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container" style={{ textAlign: "center", padding: "20px" }}>
      <h2>Radio Buttons</h2>
      <br />
      <div>
        <input
          type="radio"
          value="Time"
          checked={selectedOption === "Time"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option1">Time</label>
      </div>
      <div>
        <input
          type="radio"
          value="Money"
          checked={selectedOption === "Money"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option2">Money</label>
      </div>
      <div>
        <input
          type="radio"
          value="Fame"
          checked={selectedOption === "Fame"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option3">Fame</label>
      </div>
      <br />
      <p>Selected Option: {selectedOption || "None"}</p>
    </div>
  );
}

export default RadioButton;

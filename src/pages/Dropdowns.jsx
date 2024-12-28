import React, {useState} from "react";
import "../styles/dropdowns.css"; // Import your CSS file
import BackButton from "../components/BackButton";

function Dropdowns() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    const isOptionSelected = selectedOptions.includes(optionValue);

    if (isOptionSelected) {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== optionValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };
  
  return (
    <div className="dropdown-container">
      <BackButton />
      <br />
      <br />
      <h1>Dropdowns</h1>
      <br />
      {/* Basic Dropdown */}
      <div className="dropdown-section">
        <h3>Basic Dropdown</h3>
        <select className="basic-dropdown">
          <option value="option1">Beach</option>
          <option value="option2">Mountains</option>
          <option value="option3">Space</option>
        </select>
      </div>
      <br />
      {/* Multi-Select Dropdown */}
      <div className="dropdown-section">
        <h3>Multi-Select Dropdown</h3>
        <select 
          multiple 
          className="multi-select-dropdown" 
          style={{ width: "200px", height: "100px" }} 
          value={selectedOptions} 
          onChange={handleOptionChange} 
        >
          <option value="Chrome">Chrome</option>
          <option value="Safari">Safari</option>
          <option value="Firefox">Firefox</option>
          <option value="Edge">Edge</option>
        </select>
        <p>Selected Options: {selectedOptions.join(", ")}</p> 
      </div>
      <br />
      {/* Grouped Dropdown */}
      <div className="dropdown-section">
        <h3>Grouped Dropdown</h3>
        <select className="grouped-dropdown">
          <optgroup label="Anime">
            <option value="g1o1">One Piece</option>
            <option value="g1o2">Naruto</option>
            <option value="g1o3">Attack On Titan</option>
          </optgroup>
          <optgroup label="Series">
            <option value="g2o1">Friends</option>
            <option value="g2o2">Suites</option>
            <option value="g2o3">Money Heist</option>
          </optgroup>
        </select>
      </div>
      <br />
      {/* Searchable Dropdown */}
      <div className="dropdown-section">
        <h3>Searchable Dropdown</h3>
        <input
          type="text"
          placeholder="Search options..."
          className="search-input"
          onInput={(e) => {
            const filter = e.target.value.toLowerCase();
            const options = document.querySelectorAll(".searchable-dropdown option");
            options.forEach((option) => {
              option.style.display = option.text.toLowerCase().includes(filter)
                ? "block"
                : "none";
            });
          }}
        />
        <select className="searchable-dropdown">
          <option value="search1">Summer</option>
          <option value="search2">Monsoons</option>
          <option value="search3">Winter</option>
        </select>
      </div>
      <br />
      {/* Custom Styled Dropdown */}
      <div className="dropdown-section">
        <h3>Custom Styled Dropdown</h3>
        <div className="custom-dropdown">
          <select className="custom-select">
            <option value="custom1">Generation X</option>
            <option value="custom2">Millenials</option>
            <option value="custom3">Generation Z</option>
          </select>
          <div className="dropdown-arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default Dropdowns;

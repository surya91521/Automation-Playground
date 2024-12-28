import React from "react";
import BackButton from "../components/BackButton";

function TypeText() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "20px" }}>
      <BackButton />
      <br />
      <br />
      <h1 title="pageTitle">Type Text</h1>
      <br />
      <div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="input1" style={{ marginRight: "10px" }}>Title 1</label>
          <input
            type="text"
            id="input1"
            name="input1"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="input2" style={{ marginRight: "10px" }}>Title 2</label>
          <input
            type="text"
            id="input2"
            name="input2"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="input3" style={{ marginRight: "10px" }}>Title 3</label>
          <input
            type="text"
            id="input3"
            name="input3"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px"
            }}
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="date1" style={{ marginRight: "10px" }}>Date 1</label>
        <input
          type="date"
          id="date1"
          name="date1"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="datetime1" style={{ marginRight: "10px" }}>Date & Time 1</label>
        <input
          type="datetime-local"
          id="datetime1"
          name="datetime1"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="month1" style={{ marginRight: "10px" }}>Month 1</label>
        <input
          type="month"
          id="month1"
          name="month1"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="week1" style={{ marginRight: "10px" }}>Week 1</label>
        <input
          type="week"
          id="week1"
          name="week1"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
      </div>
    </div>
  );
}

export default TypeText;

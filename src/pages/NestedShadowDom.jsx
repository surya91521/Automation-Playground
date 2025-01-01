import React, { useEffect, useRef } from "react";
import BackButton from "../components/BackButton";

function NestedShadowDom() {
  const shadowHostRef = useRef(null);

  useEffect(() => {
    const shadowHost = shadowHostRef.current;

    if (shadowHost && !shadowHost.shadowRoot) {
      // Attach the first Shadow DOM
      const shadowRoot1 = shadowHost.attachShadow({ mode: "open" });

      // Create a container in the first shadow root for the nested shadow DOM
      shadowRoot1.innerHTML = `
        <style>
          h1 {
            font-size: 24px;
            color: #333;
          }
          .nested-container {
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
            width: 300px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        </style>
        <div>
          <h1 title="pageTitle">Outer Shadow DOM</h1>
          <div id="nested-shadow-host" class="nested-container"></div>
        </div>
      `;

      // Get the container for the nested Shadow DOM
      const nestedShadowHost = shadowRoot1.querySelector("#nested-shadow-host");

      // Attach the second Shadow DOM inside the nested container
      const shadowRoot2 = nestedShadowHost.attachShadow({ mode: "open" });

      shadowRoot2.innerHTML = `
        <style>
          .form-group {
              margin-bottom: 15px;
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          label {
              margin-right: 10px;
          }
          input {
              flex: 1;
              padding: 5px;
              border: 1px solid #ccc;
              border-radius: 3px;
          }
          button {
              padding: 10px 15px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 3px;
              cursor: pointer;
          }
          button:hover {
              background-color: #0056b3;
          }
          .output {
              margin-top: 20px;
              font-family: Arial, sans-serif;
              color: #333;
          }
        </style>
        <div>
          <h2>Nested Shadow DOM Form</h2>
          <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" />
          </div>
          <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" />
          </div>
          <button id="login-btn">Login</button>
          <div class="output" id="output"></div>
        </div>
      `;

      // Add interactivity to the form inside the nested shadow DOM
      const loginBtn = shadowRoot2.querySelector("#login-btn");
      const usernameInput = shadowRoot2.querySelector("#username");
      const passwordInput = shadowRoot2.querySelector("#password");
      const outputDiv = shadowRoot2.querySelector("#output");

      loginBtn.addEventListener("click", () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        outputDiv.textContent = `Username: ${username}, Password: ${password}`;
      });
    }
  }, []);

  return (
    <div className="container">
      <BackButton />
      <br />
      <br />
      <div ref={shadowHostRef} style={{ textAlign: "center", padding: "20px" }}></div>
    </div>
  );
}

export default NestedShadowDom;

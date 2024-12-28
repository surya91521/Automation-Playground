import React, { useEffect, useRef } from "react";
import BackButton from "../components/BackButton";

function ShadowDom() {
  const shadowHostRef = useRef(null);

  useEffect(() => {
    const shadowHost = shadowHostRef.current;
    if (shadowHost && !shadowHost.shadowRoot) {
      // Attach Shadow DOM only if it doesn't already exist
      const shadowRoot = shadowHost.attachShadow({ mode: "open" });

      shadowRoot.innerHTML = `
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
          <h1 title="pageTitle">Shadow Dom</h1>
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

      const loginBtn = shadowRoot.querySelector("#login-btn");
      const usernameInput = shadowRoot.querySelector("#username");
      const passwordInput = shadowRoot.querySelector("#password");
      const outputDiv = shadowRoot.querySelector("#output");

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

export default ShadowDom;

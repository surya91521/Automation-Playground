import React from "react";
import BackButton from "../components/BackButton";

function IframeShadow() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <BackButton />
      <br />
      <br />
      <h1 title="pageTitle">Iframes with Shadow DOM</h1>

      {/* Outer Iframe */}
      <iframe
        title="input-frame"
        style={{ width: "100%", height: "300px", border: "2px solid black" }}
        srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Iframe with Shadow DOM</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  text-align: center;
                }
                .shadow-host {
                  display: block;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                  width: 300px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
              </style>
            </head>
            <body>
              <div id="shadow-host" class="shadow-host"></div>
              <script>
                const shadowHost = document.getElementById("shadow-host");
                if (shadowHost && !shadowHost.shadowRoot) {
                  const shadowRoot = shadowHost.attachShadow({ mode: "open" });
                  shadowRoot.innerHTML = \`
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
                      <h2>User Form</h2>
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
                  \`;

                  const loginBtn = shadowRoot.querySelector("#login-btn");
                  const usernameInput = shadowRoot.querySelector("#username");
                  const passwordInput = shadowRoot.querySelector("#password");
                  const outputDiv = shadowRoot.querySelector("#output");

                  loginBtn.addEventListener("click", () => {
                    const username = usernameInput.value;
                    const password = passwordInput.value;
                    outputDiv.textContent = \`Username: \${username}, Password: \${password}\`;
                  });
                }
              </script>
            </body>
          </html>
        `}
      ></iframe>
    </div>
  );
}

export default IframeShadow;

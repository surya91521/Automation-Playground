import React from "react";

function Iframe() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <iframe
        title="input-frame"
        style={{ width: "100%", height: "200px", border: "2px solid black" }}
        srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Iframe Content</title>
            </head>
            <body style="text-align: center; padding: 20px;">
              <p>This is a text element inside an iframe.</p>
              <input type="text" placeholder="Enter text here" />
            </body>
          </html>
        `}
      ></iframe>
      
      <div style={{ marginTop: "20px" }}>
        <iframe
          title="outer-frame"
          style={{ width: "800px", height: "500px", border: "2px solid black" }}
          srcDoc={`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=800px, initial-scale=1.0" />
                <title>Iframe Content</title>
              </head>
              <body style="text-align: center; width: '800px'">
                <p>The below element is present inside nested iframe.</p>
                <iframe
                  title="inner-frame"
                  style={{ width: '800px', height: '400px' }} 
                  src="https://hianime.to/home" 
                ></iframe>
              </body>
            </html>
          `}
        ></iframe>
      </div>
    </div>
  );
}

export default Iframe;

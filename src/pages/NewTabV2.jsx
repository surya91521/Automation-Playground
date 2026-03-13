import React from "react";
import BackButton from "../components/BackButton";

function NewTabV2() {
  const links = [
    { name: 'Quotes to Scrape', url: 'https://quotes.toscrape.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'BrowserStack', url: 'https://browserstack.com' },
    { name: 'TodoMVC', url: 'https://todomvc.com' },
    { name: 'WikiBooks', url: 'https://www.wikibooks.org/' },
  ];

  const openNewTab = (url) => {
    const newTab = window.open(url, "_blank");
    if (!newTab) {
      alert("Unable to open a new tab. Please check your browser settings.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <BackButton />
      <br />
      <br />
      <h1 title="pageTitle">New Tab v2</h1>

      <section style={{ marginBottom: "40px" }}>
        <p>New tab using buttons:</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
          {links.map((link, index) => (
            <button
              key={index}
              className="component-button"
              onClick={() => openNewTab(link.url)}
              style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <p>New tab using links (anchor tags):</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="component-button"
              style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", textDecoration: "none" }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewTabV2;

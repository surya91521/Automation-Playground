import React from "react";
import BackButton from "../components/BackButton";

// Second page used by TC-623463: after the recorder detects similar elements on
// the main Element Selection page and the user navigates here, the recorder
// should surface a warning in a modal because similar elements are visible on
// the newly-loaded page too. This page therefore just renders an obvious set of
// >=2 identical, attribute-less buttons (no unique reliable attribute, no
// distinguishing parent) so detection is unambiguous on arrival.
function ElementSelectionPageTwo() {
  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <BackButton />
      <br />
      <h1 title="pageTitle">Element Selection — Page Two</h1>
      <p>A second page that also shows similar elements (for cross-page detection).</p>

      <section id="es2-leaf" style={{ margin: "24px 0" }}>
        <h2>Similar items</h2>
        <div>
          <button className="es2-item" type="button">Select</button>
          <button className="es2-item" type="button">Select</button>
          <button className="es2-item" type="button">Select</button>
          <button className="es2-item" type="button">Select</button>
        </div>
      </section>
    </div>
  );
}

export default ElementSelectionPageTwo;

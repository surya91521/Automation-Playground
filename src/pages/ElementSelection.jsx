import React from "react";
import BackButton from "../components/BackButton";

// Element Selection V2 ("Handling Multiple Similar Elements") playground.
//
// Each section deliberately engineers one path of the recorder's
// findMeaningfulParentWithSimilarElements logic (TB:
// https://browserstack.atlassian.net/wiki/spaces/PROD/pages/5275516973):
//
//   - Detection fires only when >=2 visible same-tag elements share the leaf
//     index AND the target has NO *unique reliable attribute*.
//   - Reliable attrs: id, data-test*, data-cy, data-qa, name, title,
//     placeholder, alt, label, aria-label, href, src, data-*, innerText.
//   - Numeric-only attribute values (e.g. data-rowid="28") are IGNORED for
//     uniqueness; numbers embedded in text (aria-label="Go to Page 2") count.
//   - A "meaningful parent" is the nearest indexed ancestor whose href OR
//     innerText is distinct from the target and its +/-2 indexed siblings.
//   - Positive-detection targets carry only a shared `class` (excluded from
//     reliability) so tests click them positionally; negative targets carry a
//     unique reliable attribute.
//
// Build deep-nesting helper: `levels` nested <div>s, EACH with two same-tag
// children (so every level is XPath-indexed), drilling down the first child to
// a leaf that has two identical sibling buttons. Used to exceed the 10
// indexed-ancestor termination limit (TC-623456).
function DeepNest({ levels }) {
  let node = (
    <div className="es-deep-leaf">
      <button className="es-deep-btn" type="button">Tap</button>
      <button className="es-deep-btn" type="button">Tap</button>
    </div>
  );
  for (let i = 0; i < levels; i += 1) {
    node = (
      <div className="es-deep-wrap">
        {node}
        <div className="es-deep-sibling" />
      </div>
    );
  }
  return node;
}

function ElementSelection() {
  // Random number of filler <div> siblings rendered BEFORE the identical-buttons holder, so
  // the holder's indexed position among the section's children shifts on every page load.
  // The identical "Pick" buttons stay flat siblings inside the holder (so they're still
  // detected as similar at record), but the recorded absolute XPath (.../div[N]/button[k])
  // points to an empty filler div at replay -> positional resolution fails -> the recorder
  // falls back to similar-element resolution across multiple identical candidates with no
  // distinguishing context -> "multiple similar elements" local-replay error (TC-623459).
  const randomFillerCount = 1 + Math.floor(Math.random() * 4);

  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <BackButton />
      <br />
      <h1 title="pageTitle">Element Selection</h1>
      <p>Scenarios for similar-element detection (Element Selection V2).</p>

      {/* A. Meaningful parent via parent innerText, with NON-INDEXED wrappers
          between the indexed card and the target button (TC-623449: iteration
          count toward termination must skip non-indexed nodes and still reach
          the card as the meaningful parent). Target = "Add" in any card; the
          card's <h3> innerText is the distinct parent context. */}
      <section id="es-parent-innertext" style={{ margin: "24px 0" }}>
        <h2>Cards — parent innerText</h2>
        {["Alpha", "Beta", "Gamma", "Delta"].map((name) => (
          <div className="es-card" key={name} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
            <h3 className="es-card-title">Card {name}</h3>
            {/* single-child wrappers below are NON-indexed (no same-tag siblings) */}
            <div className="es-card-body">
              <span className="es-card-actions">
                <button className="es-card-add" type="button">Add</button>
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* B. Meaningful parent via parent href. Target = "Buy" span inside an
          anchor; each anchor has a distinct href. */}
      <section id="es-parent-href" style={{ margin: "24px 0" }}>
        <h2>Linked rows — parent href</h2>
        {[1, 2, 3, 4].map((n) => (
          <a className="es-link-row" href={`#/es/item/${n}`} key={n} style={{ display: "block", margin: "6px" }}>
            <span className="es-buy">Buy</span>
          </a>
        ))}
      </section>

      {/* C. Reliable attribute present & UNIQUE -> detection must NOT fire
          (TC-623457). Identical "Save" buttons; the target carries a unique id
          (a reliable attribute). */}
      <section id="es-reliable" style={{ margin: "24px 0" }}>
        <h2>Reliable attribute — no detection</h2>
        <button className="es-rel" type="button">Save</button>
        <button className="es-rel" id="es-rel-target" type="button">Save</button>
        <button className="es-rel" type="button">Save</button>
      </section>

      {/* D1. Numeric-only value of a reliable attribute is IGNORED for uniqueness, so
          detection STILL fires (TC-623458, e.g. 1). data-testid is a reliable attribute,
          but a purely-numeric value ("28") is skipped by isAttributeUniqueAmongSimilarElements,
          so no unique reliable attribute remains across the identical "Open" buttons. */}
      <section id="es-numeric-pure" style={{ margin: "24px 0" }}>
        <h2>Numeric attribute — pure number ignored (still similar)</h2>
        <button className="es-num" data-testid="11" type="button">Open</button>
        <button className="es-num" data-testid="28" type="button">Open</button>
        <button className="es-num" data-testid="34" type="button">Open</button>
      </section>

      {/* D2. Number embedded in TEXT is considered for uniqueness, so the target
          has a unique reliable attr -> detection must NOT fire (TC-623458, e.g. 2).
          aria-label="Go to Page 2" is unique among the siblings. */}
      <section id="es-numeric-text" style={{ margin: "24px 0" }}>
        <h2>Numeric-in-text — aria-label unique (no detection)</h2>
        <button className="es-page" aria-label="Go to Page 1" type="button">Page</button>
        <button className="es-page" aria-label="Go to Page 2" type="button">Page</button>
        <button className="es-page" aria-label="Go to Page 3" type="button">Page</button>
      </section>

      {/* E. Leaf-level identical siblings with NO distinguishing ancestor ->
          no meaningful parent; used for the local-replay "multiple similar
          elements" error (TC-623459). */}
      <section id="es-leaf" style={{ margin: "24px 0" }}>
        <h2>Leaf siblings — no meaningful parent</h2>
        <div>
          <button className="es-leaf-btn" type="button">Go</button>
          <button className="es-leaf-btn" type="button">Go</button>
          <button className="es-leaf-btn" type="button">Go</button>
        </div>
      </section>

      {/* E2. Randomly-placed identical "Pick" buttons (random nesting depth + shuffled order)
          so absolute XPaths differ between record and replay -> recorded locator fails to
          resolve at replay -> similar-element resolution hits multiple identical candidates
          -> "multiple similar elements" local-replay error (TC-623459). */}
      <section id="es-random" style={{ margin: "24px 0" }}>
        <h2>Randomly placed similar elements</h2>
        {Array.from({ length: randomFillerCount }, (_, i) => (
          <div className="es-rand-filler" key={`f${i}`} />
        ))}
        <div className="es-rand-holder">
          {[0, 1, 2, 3, 4].map((i) => (
            <button className="es-rand" type="button" key={i}>Pick</button>
          ))}
        </div>
      </section>

      {/* F. Similar elements buried beyond the 10 indexed-ancestor termination
          limit -> no meaningful parent within budget -> position/pivot-only
          context (TC-623456). 12 indexed levels (each wrapper has 2 same-tag
          children) above two identical leaf buttons. */}
      <section id="es-deep" style={{ margin: "24px 0" }}>
        <h2>Deep nesting — beyond 10 indexed levels</h2>
        <DeepNest levels={12} />
      </section>

      {/* G. Mocked Flutter semantics DOM (TC-623450): flt-* custom elements use
          aria-label instead of innerText. Two identical flt-semantics nodes with
          NON-unique aria-label -> similar; a third section provides a unique one.
          (Approximation of a real Flutter web build's semantics tree.) */}
      <section id="es-flutter" style={{ margin: "24px 0" }}>
        <h2>Flutter components (mocked semantics)</h2>
        {/* Custom elements are display:inline by default with zero size; give them an
            explicit clickable box. Flutter semantics carry NO innerText, so the recorder
            must fall back to aria-label for similarity -- the three share "Add to cart"
            (non-unique) so detection should fire. */}
        <flt-semantics-host style={{ display: "block" }}>
          {[0, 1, 2].map((i) => (
            <flt-semantics
              key={i}
              className="es-flt"
              role="button"
              aria-label="Add to cart"
              tabIndex={0}
              style={{
                display: "inline-block",
                width: "120px",
                height: "40px",
                margin: "6px",
                border: "1px solid #888",
                borderRadius: "4px",
                cursor: "pointer",
                verticalAlign: "middle",
              }}
            >
              <flt-semantics-img style={{ display: "block", width: "100%", height: "100%" }} />
            </flt-semantics>
          ))}
        </flt-semantics-host>
      </section>
    </div>
  );
}

export default ElementSelection;

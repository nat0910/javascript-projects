import React, { useState, useLayoutEffect, useMemo } from "react";
import Section from "./Section";
import ScrollContext from "./ScrollContext";
import { sectionChanges } from "../functions/getChanges";

export default function Content() {
  const [secHeight, setSecHeight] = useState(0);

  useLayoutEffect(() => {
    setSecHeight(window.innerHeight);
  }, [window.innerWidth]);

  const [scrollingElement, setScrollingElement] = useState(null);

  function scrollingElRef(ref) {
    setScrollingElement(ref);
  }

  const { firstSection, secondSection, thirdSection, fourthSection } = useMemo(
    () => sectionChanges()
  );

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div className="content-section" ref={scrollingElRef}>
        <Section height={3240} secHeight={secHeight}>
          {(proportion) => (
            <div
              className="sticky-content home"
              style={firstSection(proportion)}
            >
              <h1>home section</h1>
              <h2>{proportion}</h2>
            </div>
          )}
        </Section>
        <Section height={3240} secHeight={secHeight}>
          {(proportion) => (
            <div
              className="sticky-content project"
              style={secondSection(proportion)}
            >
              <h1>project section</h1>
              <h2>{proportion}</h2>
            </div>
          )}
        </Section>
        <Section height={3240} secHeight={secHeight}>
          {(proportion) => (
            <div
              className="sticky-content about"
              style={thirdSection(proportion)}
            >
              <h1>about me section</h1>
              <h2>{proportion}</h2>
            </div>
          )}
        </Section>
        <Section height={3240} secHeight={secHeight}>
          {(proportion) => (
            <div
              className="sticky-content contact"
              style={fourthSection(proportion)}
            >
              <h1>contact section</h1>
              <h2>{proportion}</h2>
            </div>
          )}
        </Section>
      </div>
    </ScrollContext.Provider>
  );
}

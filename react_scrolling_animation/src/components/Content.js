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
        <Section height={3240}>
          {(proportion) => (
            <div className="sticky-content home">
              <h5>Scroll this page!</h5>
              <div className="flex" style={firstSection(proportion)}>
                <h2>{proportion}</h2>
                <p>
                  This section has code that takes the number above and does the
                  following :
                </p>
                <p>Below 0 , it has opacity is 0 </p>
                <p>
                  Between 0 and 0.1, it fades in and scales down from 5 to 1{" "}
                </p>
                <p>Between 0.1 and 1, it has full opacity and no scaling </p>
                <p>
                  Between 1 and 1.1, it fades out and scales down from 1 to 5{" "}
                </p>
                <p>About 1.1, it has 0 opacity </p>
              </div>
            </div>
          )}
        </Section>
        <Section height={3240}>
          {(proportion) => (
            <div
              className="sticky-content project"
              style={secondSection(proportion)}
            >
              <h2>{proportion}</h2>
              <p>
                This section has code that takes the number above and does the
                following :
              </p>
              <p>Below -0.3, it has 0.05 scaleX and 200px translateY.</p>
              <p>
                Between -0.3 and 0, it scaleX increases to 1 and translateY
                decreases to 0.
              </p>
              <p>Between 1 and 1.3, it scaleX decreases to 0.</p>
            </div>
          )}
        </Section>
        <Section height={3240}>
          {(proportion) => (
            <div
              className="sticky-content about-me"
              style={thirdSection(proportion)}
            >
              <h2>{proportion}</h2>
            </div>
          )}
        </Section>
        <Section height={3240}>
          {(proportion) => (
            <div
              className="sticky-content contact"
              style={fourthSection(proportion)}
            >
              <h2>{proportion}</h2>
            </div>
          )}
        </Section>
      </div>
    </ScrollContext.Provider>
  );
}

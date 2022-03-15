import React, { useState, useMemo } from "react";
import Section from "./Section";
import ScrollContext from "./ScrollContext";
import { sectionChanges } from "../functions/getChanges";

export default function Content() {
  const [scrollingElement, setScrollingElement] = useState(null);

  function scrollingElRef(ref) {
    setScrollingElement(ref);
  }

  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthBackgroundSection,
    fourthForegroundSection,
  } = useMemo(() => sectionChanges(),[]);

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div className="content-section" ref={scrollingElRef}>
        <Section height={3240}>
          {(proportion) => (
            <div className="sticky-content home">
              <h3>Scroll this page!</h3>
              <div className="flex" style={firstSection(proportion)}>
                <h2>{proportion}</h2>
                <p style={{ fontWeight: 600 }}>
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
              <p style={{ fontWeight: 600 }}>
                This section has code that takes the number above and does the
                following :
              </p>
              <p>Below -0.3, it has 0.05 scaleX and 200px translateY.</p>
              <p>
                Between -0.3 and 0, it scaleX increases to 1 and translateY
                decreases to 0.
              </p>
              <p>From 1, it scaleX decreases to 0.</p>
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
              <p style={{ fontWeight: 600 }}>
                This section has code that takes the number above and does the
                following :
              </p>
              <p>Below 0 , it has opacity is 0 </p>
              <p>Between 0 and 0.1, it fades in and scales up from 0.5 to 1 </p>
              <p>Between 0.1 and 1, it has full opacity and no scaling </p>
              <p>
                Between 1 and 1.1, it fades out and scales down from 1 to 0.5{" "}
              </p>
              <p>About 1.1, it has 0 opacity </p>
            </div>
          )}
        </Section>
        <Section height={3240}>
          {(proportion) => (
            <div
              className="sticky-content contact"
              style={fourthBackgroundSection(proportion)}
            >
              <div
                className="flex ts"
                style={fourthForegroundSection(proportion)}
              >
                <h2>{proportion}</h2>
                <p style={{ fontWeight: 600 }}>
                  This section has code that takes the number above and does the
                  following :
                </p>
                <p style={{ fontWeight: 500 }}>The Background :</p>
                <p>
                  Below 0.3 , has border-radius of (50rem 0 0 0),
                  translateX(20rem) and translateY(10rem) .
                </p>
                <p>Between 0.3 and 0 , border-radius decreases to 0, translateX and translateY also decreases to 0 .</p>
                <p style={{ fontWeight: 500 }}>The Text :</p>
                <p>
                  Slides in when proportion is between 0.1 and 1, it will work
                  even if the user stop scrolling
                </p>
              </div>
            </div>
          )}
        </Section>
      </div>
    </ScrollContext.Provider>
  );
}

import { useContext, useEffect, useRef, useState } from "react";
import ScrollContext from "./ScrollContext";

export default function Section(para) {
  const { height, children } = para;
  const elRef = useRef();
  const { scrollingElement } = useContext(ScrollContext);
  const [val, setVal] = useState(null);

  function onScroll(container) {
    const containerRect = container.getBoundingClientRect();
    const selfRect = elRef.current.getBoundingClientRect();
    const offTop = containerRect.y - selfRect.y;

    if (containerRect.height < selfRect.height) {
      const viewHeight = selfRect.height - containerRect.height;
      setVal(offTop / viewHeight);
    } else {
      const viewHeight = containerRect.height;
      const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
      setVal(result);
    }
  }

  useEffect(() => {
    if (scrollingElement) {
      scrollingElement.addEventListener("scroll", (e) => onScroll(e.target));
      onScroll(scrollingElement);
    }
    return () => scrollingElement?.removeEventListener("scroll", onScroll);
  }, [scrollingElement]);

  return (
    <section ref={elRef} style={{ height }}>
      <div
        className="sticky-view"
        style={{ height: scrollingElement?.clientHeight }}
      >
        {children(val)}
      </div>
    </section>
  );
}

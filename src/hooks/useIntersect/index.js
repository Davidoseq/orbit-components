// @flow
import { useState, useEffect, useRef } from "react";

export default ({ root = null, rootMargin, threshold = 0 }: IntersectionObserverOptions) => {
  if (typeof window !== "undefined") {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState<Element | null>(null);

    const observer = useRef(
      new window.IntersectionObserver(([ent]) => updateEntry(ent), {
        root,
        rootMargin,
        threshold,
      }),
    );

    useEffect(() => {
      const { current: currentObserver } = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    }, [node]);

    return [setNode, entry];
  }

  return [null, null];
};

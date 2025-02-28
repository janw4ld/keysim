import React, {useEffect, useRef} from "react";
import threeApp from "../three/index";

export default function Home() {
  const rootEl = useRef(null);

  useEffect(() => {
    threeApp(rootEl.current);
  }, []);

  return (
    <>
      <div
        id="canvas-wrapper"
        ref={rootEl}
        role="region"
        aria-label="3d scene of keyboard"
      ></div>
    </>
  );
}

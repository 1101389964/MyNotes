import React, { useEffect, useState } from "react";

export default function App() {
  const scrollPosition = useScrollPosition();

  return (
    <div style={{ padding: "1000px 0" }}>
      <h2 style={{ position: "fixed", top: "10px" }}>
        CustomSrollPositionHook,scrollY:{scrollPosition}
      </h2>
    </div>
  );
}

function useScrollPosition() {
  const [scrollPosition, setscrollPostion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setscrollPostion(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

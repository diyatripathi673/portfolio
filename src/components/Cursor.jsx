import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-50
      shadow-[0_0_12px_#c084fc]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default Cursor;

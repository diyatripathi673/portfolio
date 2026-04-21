// import React from "react";
// import Wrap from "./components/wrap/Wrap";

// const App = () => {
//   return (
//     <div>
//       {/* Background Animation */}
//       <Wrap />

//       {/* Content */}
//       <div style={{ position: "relative", zIndex: 1, color: "white" }}>
//         <h1 style={{ padding: "20px" }}>Hey I'm Diya 👋</h1>

//         {/* Scroll test */}
//         <div style={{ height: "200vh", padding: "20px" }}>
//           Scroll karke dekh 👇
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
// import Background from "./components/background/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <Navbar />

      <Home />
    </>
  );
};

export default App;

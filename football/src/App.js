import React, { useEffect } from "react";
import './styles/styles.css'
import Stats from "./Components/Stats";
import Matches from "./Components/Matches";

function App() {



    return (
    <>
      <div className="title section">
        <h1>YKC FOOTBALL TOURNAMENT 2023/24</h1>
        <h3 style={{color: "rgba(255, 255, 255, 0.7)"}}>made by <a href="https://www.instagram.com/agoenes/" style={{color: "#fff"}}>@agoenes</a></h3>
      </div>

      <div className="line"></div>

      <div className="statsDiv">
          <Stats />
      </div>

      <div className="line"></div>

      <div className="matchesDiv">
          {/*<Matches />*/}
      </div>

      <div className="matchesDiv" style={{paddingBottom: "20px"}}>
          <h1 style={{color: "rgba(255, 255, 255, 0.7)"}}>made by <a href="https://www.instagram.com/agoenes/" style={{color: "#fff"}}>@agoenes</a></h1>
      </div>

    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Display from "../components/Display";
import myPortfolio from "../examples.json";

function Portfolio() {
  const [examples, setExamples] = useState(myPortfolio);

  return (
    <>
      <h2>Awesome Jude</h2>
      <p className="introStatement">
        Here is a bunch of stuff explaining my work in broad terms. Including
        excitement level of interest in coding and in the field in general.
      </p>

      {examples.map((example) => {
        return <Display data={example} />;
      })}
    </>
  );
}

export default Portfolio;

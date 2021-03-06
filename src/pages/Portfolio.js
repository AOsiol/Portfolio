import React, { useState } from "react";
import Display from "../components/Display";
import myPortfolio from "../examples.json";

function Portfolio() {
  const [examples, setExamples] = useState(myPortfolio);

  return (
    <div className="containerP">
      <h2>Recent Projects</h2>
      {/* <p className="introStatement">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p> */}

      {examples.map((example) => {
        return <Display data={example} />;
      })}
    </div>
  );
}

export default Portfolio;

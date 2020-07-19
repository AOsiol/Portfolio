import React from "react";

function Resume() {
  return (
    <div className="containerR">
      <div className="category">
        <h4>Employment</h4>
      </div>
      <div className="category">
        <h4>Education</h4>
      </div>
      <div className="answer">
        <h2>University of Richmond</h2>
        <p>Full Stack Web Development Certificate</p>

        <h2>Virginia Commonwealth University</h2>
        <p>BFA Painting and Printmaking</p>
      </div>
      <div className="category">
        <h4>Certificate</h4>
      </div>
      <div className="answer">
        <h2>Project Management Institute</h2>
        <p>Project Management Professional, 2567924</p>
      </div>
    </div>
  );
}

export default Resume;

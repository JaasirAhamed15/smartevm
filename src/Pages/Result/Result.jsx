import React from "react";
import "./Result.css";
import Navbar from "../../Components/Navbar/Navbar";

const candidates = [
  { name: "Candidate 1", votes: 50 },
  { name: "Candidate 2", votes: 50 },
  { name: "Candidate 3", votes: 50 },
  { name: "Candidate 4", votes: 50 },
  { name: "Candidate 5", votes: 50 },
  { name: "Candidate 6", votes: 50 },
  { name: "Candidate 7", votes: 50 },
  { name: "Candidate 8", votes: 50 },
];

const Result = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <h1>Election Result</h1>
        {candidates.map((candidate, index) => (
          <div className="res-design" key={index}>
            <div className="results">
              <h1>{candidate.name}</h1>
              <h1>{candidate.votes}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;

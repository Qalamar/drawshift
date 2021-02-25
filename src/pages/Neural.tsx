/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

const Neural = () => {
  const [iterations, setiterations] = useState(100);

  const [Row1, setoperationx1] = useState([0, 0, 1, 1]);
  const [Row2, setoperationx2] = useState([0, 1, 0, 1]);
  const [Result, setoperationResults] = useState([0, 0, 0, 1]);

  const [S, setS] = useState(0);
  const [Sigma, setSigma] = useState(0);

  const [w0, setw0] = useState(0);
  const [w1, setw1] = useState(0);
  const [w2, setw2] = useState(0);

  const [b, setB] = useState(0);
  const [x1, setx1] = useState(1);
  const [x2, setx2] = useState(1);

  const [temp, settemp] = useState(0);

  const firstIteration = () => {
    setS(b * w0 + x1 * w1 + x2 * w2);
    S > 0 ? setSigma(1) : setSigma(0);
  };

  const Reff = () => {
    for (let index = 0; index < Result.length; index++) {
      console.log("w0", w0, "w1", w1, "w2", w2);
      setw1(w1 + Row1[index] * Result[index]);
      setw2(w2 + Row2[index] * Result[index]);
      setB(b + Result[index]);
      //   settemp(w1 + operationx1[index] * operationResults[index]);
      //   if (temp - w1 === 0) {
      //     break;
      //   }
    }
  };

  useEffect(() => {
    firstIteration();
    Reff();
    console.log("b", b, "w1", w1, "w2", w2);
  }, []);
  return (
    <div className="w-screen h-screen p-32">
      <div className="text-2xl font-bold">b: {b}</div>
      <div className="text-2xl font-bold">w1: {w1}</div>
      <div className="text-2xl font-bold">w2: {w2}</div>
    </div>
  );
};

export default Neural;

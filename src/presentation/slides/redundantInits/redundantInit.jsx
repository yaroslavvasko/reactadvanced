import React, { useState } from "react";
import { calculateMax, showMaxNotification } from "./calculateMax";

export const RedundantInitBad = () => {
  const [numbers, setNumbers] = useState([]);

  const max = calculateMax(numbers);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  const showMax = () => showMaxNotification(max);

  return (
    <>
      <button onClick={addNumber}>Add number</button>
      <button onClick={showMax}>Show max</button>

      {numbers}
    </>
  );
};

export const RedundantInitBadCode = `
const App = () => {
  const [numbers, setNumbers] = useState([]);

  const max = calculateMax(numbers);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  const showMax = () => showMaxNotification(max);

  return (
    <>
      <button onClick={addNumber}>Add number</button>
      <button onClick={showMax}>Show max</button>                
      {numbers}
    </>
  );
};
`;

export const RedundInitGood = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  const showMax = () => {
    const max = calculateMax(numbers);
    showMaxNotification(max);
  };

  return (
    <>
      <button onClick={addNumber}>Add number</button>
      <button onClick={showMax}>Show max</button>

      {numbers}
    </>
  );
};

export const RedundInitGoodCode = `
const App = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  const showMax = () => {
    const max = calculateMax(numbers);
    showMaxNotification(max);
  } 

  return (
    <>
      <button onClick={addNumber}>Add number</button>
      <button onClick={showMax}>Show max</button>                
      {numbers}
    </>
  );
};
`;

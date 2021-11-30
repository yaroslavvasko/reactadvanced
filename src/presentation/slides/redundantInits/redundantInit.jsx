import React, { useState } from "react";

export const RedundantInitBad = () => {
  const [numbers, setNumbers] = useState([]);

  const max = Math.max(...numbers);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  const showMax = () => alert(`Max value: ${max}`);

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

  const max = Math.max(...numbers);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  const showMax = () => alert(\`Max value: \${max}\`);

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
    const max = Math.max(...numbers);
    alert(`Max value: ${max}`);
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
    const max = Math.max(...numbers);
    alert(\`Max value: \${max}\`);
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

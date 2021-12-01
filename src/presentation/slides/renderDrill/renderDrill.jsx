import React, { useEffect, useState } from "react";
import RenderVisualizer from "../../../helpers/renderVisualizer/renderVisualizer";

const componentStyles = { padding: 20, border: "1px solid pink" };

const ComponentA = () => {
  return (
    <RenderVisualizer>
      <div style={componentStyles}>Component A</div>
    </RenderVisualizer>
  );
};

const ComponentB = () => {
  return (
    <RenderVisualizer>
      <div style={componentStyles}>
        Component B
        <ComponentA />
      </div>
    </RenderVisualizer>
  );
};

const ComponentC = () => {
  return (
    <RenderVisualizer>
      <div style={componentStyles}>
        Component C<ComponentB />
      </div>
    </RenderVisualizer>
  );
};

export const CounterDrill = () => {
  const [number, setNumber] = useState(0);

  const increase = () => setNumber((num) => num + 1);

  return (
    <div style={componentStyles}>
      Parent
      <button onClick={increase}>{number}</button>
      <ComponentC />
    </div>
  );
};

export const CounterDrillCode = `
const ComponentA = () => <div style={componentStyles}>Component A</div>;
const ComponentB = () => <div style={componentStyles}>Component B <ComponentA /></div>;
const ComponentC = () => <div style={componentStyles}>Component C <ComponentB /></div>;

const App = () => {
const [number, setNumber] = useState(0);
const increase = () => setNumber((num) => num + 1);

return <div style={componentStyles}>
    Parent <button onClick={increase}>{number}</button>
    <ComponentC />
    </div>
};
`;

const CounterWrapper = ({ children }) => {
  const [number, setNumber] = useState(0);

  const increase = () => setNumber((num) => num + 1);

  return (
    <div style={componentStyles}>
      <button onClick={increase}>{number}</button>
      {children}
    </div>
  );
};

export const CounterDrillGood = () => {
  return (
    <CounterWrapper>
      <ComponentC />
    </CounterWrapper>
  );
};

export const CounterDrillGoodCode = `
const ComponentA = () => <div style={componentStyles}>Component A</div>;
const ComponentB = () => <div style={componentStyles}>Component B <ComponentA /></div>;
const ComponentC = () => <div style={componentStyles}>Component C <ComponentB /></div>;

const CounterWrapper = ({ children }) => {
    const [number, setNumber] = useState(0);
    const increase = () => setNumber((num) => num + 1);

    return <div style={componentStyles}>
        <button onClick={increase}>{number}</button>
        {children}
    </div>;
};

const App = () => <CounterWrapper><ComponentC /></CounterWrapper>;
`;

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => setNumber((num) => num + 1);

  return (
    <>
      <button onClick={increase}>{number}</button>
    </>
  );
};

export const CounterSeparated = () => {
  return (
    <div style={componentStyles}>
      <Counter />
      <ComponentC />
    </div>
  );
};

export const CounterSeparatedCode = `
const ComponentA = () => <div style={componentStyles}>Component A</div>;
const ComponentB = () => <div style={componentStyles}>Component B <ComponentA /></div>;
const ComponentC = () => <div style={componentStyles}>Component C <ComponentB /></div>;

const Counter = () => {
    const [number, setNumber] = useState(0);  
    const increase = () => setNumber((num) => num + 1);
    return <button onClick={increase}>{number}</button>;
};

const App = () => {
    return <div style={componentStyles}>
        <Counter />
        <ComponentC />
        </div>;
    };
`;

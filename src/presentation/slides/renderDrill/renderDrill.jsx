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

const CounterHOC = ({ children }) => {
  const [number, setNumber] = useState(0);

  const increase = () => setNumber((num) => num + 1);

  return (
    <div style={componentStyles}>
      <button onClick={increase}>{number}</button>
      <>{children}</>
    </div>
  );
};

export const CounterDrillGood = () => {
  return (
    <CounterHOC>
      <ComponentC />
    </CounterHOC>
  );
};

export const CounterDrillGoodCode = `
const ComponentA = () => <div style={componentStyles}>Component A</div>;
const ComponentB = () => <div style={componentStyles}>Component B <ComponentA /></div>;
const ComponentC = () => <div style={componentStyles}>Component C <ComponentB /></div>;

const CounterHOC = ({ children }) => {
    const [number, setNumber] = useState(0);
    const increase = () => setNumber((num) => num + 1);

    return <div style={componentStyles}>
        <button onClick={increase}>{number}</button>
        <>{children}</>
    </div>;
};

const App = () => <CounterHOC><ComponentC /></CounterHOC>;
`;

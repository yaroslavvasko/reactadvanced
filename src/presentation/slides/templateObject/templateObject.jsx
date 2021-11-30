import React, { memo, useState } from "react";
import RenderVisualizer from "../../../helpers/renderVisualizer/renderVisualizer";

const NumDiv = memo(({ number, style }) => {
  return (
    <RenderVisualizer>
      <div style={style}>{number}</div>
    </RenderVisualizer>
  );
});

export const TemplateObject = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);

  return (
    <>
      <button onClick={addNumber}>Add number</button>

      {numbers.map((number) => (
        <NumDiv
          key={number}
          number={number}
          style={{ margin: 10, backgroundColor: "greed" }}
        />
      ))}
    </>
  );
};

export const TemplateObjectCode = `
    const NumDiv = memo(({ number, style }) => {
        return <div style={style}>{number}</div>;
    });

    const App = () => {
        const [numbers, setNumbers] = useState([]);
        const addNumber = () => setNumbers((nums) => [...nums, nums.length]);

        return <>
            <button onClick={addNumber}>Add number</button>

            {numbers.map((number) => (
                <NumDiv
                    key={number}
                    number={number}
                    style={{ margin: 10, backgroundColor: "greed" }}
                />
            ))}
        </>;
    };
`;

const styleObj = { margin: 10, backgroundColor: "greed" };

export const GlobalStyleObject = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);

  return (
    <>
      <button onClick={addNumber}>Add number</button>

      {numbers.map((number) => (
        <NumDiv key={number} number={number} style={styleObj} />
      ))}
    </>
  );
};

export const GlobalStyleObjectCode = `
    const styleObj = { margin: 10, backgroundColor: "greed" };

    const NumDiv = memo(({ number, style }) => {
        return <div style={style}>{number}</div>;
    });

    const App = () => {
        const [numbers, setNumbers] = useState([]);
        const addNumber = () => setNumbers((nums) => [...nums, nums.length]);

        return <>
            <button onClick={addNumber}>Add number</button>

            {numbers.map((number) => <NumDiv key={number} number={number} style={styleObj}/>
            ))}
        </>;
    };
`;

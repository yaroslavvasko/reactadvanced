import React, { useState } from "react";

const Fruit = ({ index, id, name }) => (
  <tr>
    <td>
      <label>{index}</label>
    </td>
    <td>
      <label>{id}</label>
    </td>
    <td>
      <label>{name}</label>
    </td>
    <td>
      <input />
    </td>
  </tr>
);

const fruitsInit = [
  { id: 1, name: "🍇 Grape" },
  { id: 2, name: "🍓 Strawberry" },
  { id: 3, name: "🍉 Watermelon" },
  { id: 4, name: "🍌 Banana" },
  { id: 5, name: "🍒 Cherries" },
  { id: 6, name: "🥭 Mango" },
  { id: 7, name: "🥝 Kiwi" },
];

export const BadKeyIndex = () => {
  const [fruits, setFruits] = useState(fruitsInit.slice(0, 3));

  const addFruit = () =>
    setFruits((data) => [fruitsInit[data.length], ...data]);

  return (
    <>
      <button onClick={addFruit}>Add product</button>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((product, index) => (
            <Fruit key={index} index={index} {...product} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export const BadKeyIndexCode = `
    const Fruit = ({ index, id, name }) => (<tr>
            <td><label>{index}</label></td>
            <td><label>{id}</label></td>
            <td><label>{name}</label></td>
            <td><input /></td>
        </tr>);

    const App = () => {
        const [fruits, setFruits] = useState(fruitsInit.slice(0, 3));      
        const addFruit = () =>
            setFruits((data) => [fruitsInit[data.length], ...data]);
      
        return (<>
            <button onClick={addFruit}>Add product</button>
      
            <table>
              <tr>
                <th>Index</th><th>Id</th><th>Name</th><th>Count</th>
              </tr>
              {fruits.map((product, index) => (
                <Fruit key={index} index={index} {...product} />
              ))}
            </table>
          </>);};
`;

export const GoodKeyId = () => {
  const [fruits, setFruits] = useState(fruitsInit.slice(0, 3));

  const addFruit = () =>
    setFruits((data) => [fruitsInit[data.length], ...data]);

  return (
    <>
      <button onClick={addFruit}>Add product</button>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((product, index) => (
            <Fruit key={product.id} index={index} {...product} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export const GoodKeyIndexCode = `
    const Fruit = ({ index, id, name }) => (<tr>
            <td><label>{index}</label></td>
            <td><label>{id}</label></td>
            <td><label>{name}</label></td>
            <td><input /></td>
        </tr>);

    const App = () => {
        const [fruits, setFruits] = useState(fruitsInit.slice(0, 3));      
        const addFruit = () =>
            setFruits((data) => [fruitsInit[data.length], ...data]);
      
        return (<>
            <button onClick={addFruit}>Add product</button>
      
            <table>
              <tr>
                <th>Index</th><th>Id</th><th>Name</th><th>Count</th>
              </tr>
              {fruits.map((product, index) => (
                <Fruit key={product.id} index={index} {...product} />
              ))}
            </table>
          </>);};
`;

import React, { memo, useState } from "react";
import RenderVisualizer from "../../../helpers/renderVisualizer/renderVisualizer";
import "../../../helpers/renderVisualizer/style.css";
import { showMessage } from "./showMessage";

const NumButton = memo(({ number, onShow }) => {
  const onClick = () => onShow(number);
  return (
    <RenderVisualizer>
      <button onClick={onClick}>{number}</button>
    </RenderVisualizer>
  );
});

export class AnonymousCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [] };
  }

  addNumber = () =>
    this.setState((prevState) => ({
      numbers: [...prevState.numbers, prevState.numbers.length],
    }));

  render() {
    return (
      <>
        <button onClick={this.addNumber}>Add number</button>

        {this.state.numbers.map((number) => (
          <NumButton
            key={number}
            number={number}
            onShow={(num) => showMessage(`Number ${num}`)}
          />
        ))}
      </>
    );
  }
}

export const AnonymousCallbackCode = `
    const NumButton = memo(({ number, onShow }) => {
        const onClick = () => onShow(number);
        return (<button onClick={onClick}>{number}</button>);
    });

    class App extends React.Component {
        ...
        addNumber = () =>
            this.setState((prevState) => ({
                numbers: [...prevState.numbers, prevState.numbers.length],
            }));
    
        render() {
            return (<>
                <button onClick={this.addNumber}>Add number</button>
        
                {this.state.numbers.map((number) => (
                    <NumButton key={number} number={number} onShow={(num) => showMessage(\`Number \${num}\`)}
                    />
                ))}
            </>);
        }
    }
    `;

export class StandardCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [] };
  }

  addNumber = () =>
    this.setState((prevState) => ({
      numbers: [...prevState.numbers, prevState.numbers.length],
    }));

  alertNumber = (num) => showMessage(`Number ${num}`);

  render() {
    return (
      <>
        <button onClick={this.addNumber}>Add number</button>

        {this.state.numbers.map((number) => (
          <NumButton key={number} number={number} onShow={this.alertNumber} />
        ))}
      </>
    );
  }
}

export const StandardCallbackCode = `
    class App extends React.Component {
        ...
        addNumber = () =>
        this.setState((prevState) => ({
            numbers: [...prevState.numbers, prevState.numbers.length],
        }));
        alertNumber = (num) => showMessage(\`Number \${num}\`);
    
        render() {
            return (<>
                <button onClick={this.addNumber}>Add number</button>
        
                {this.state.numbers.map((number) => (
                    <NumButton key={number} number={number} onShow={alertNumber}
                    />
                ))}
            </>);
        }
    }
    `;

const globalAlertNumber = (num) => showMessage(`Number ${num}`);

export const FunctionComponentCallback = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => setNumbers((nums) => [...nums, nums.length]);

  return (
    <>
      <button onClick={addNumber}>Add number</button>

      {numbers.map((number) => (
        <NumButton key={number} number={number} onShow={globalAlertNumber} />
      ))}
    </>
  );
};

export const FunctionCallbackCode = `
  const globalAlertNumber = (num) => showMessage(\`Number \${num}\`);

  const App = () => {
    const [numbers, setNumbers] = useState([]);
  
    const addNumber = () => setNumbers((nums) => [...nums, nums.length]);
  
    return (
      <>
        <button onClick={addNumber}>Add number</button>
  
        {numbers.map((number) => (
          <NumButton key={number} number={number} onShow={globalAlertNumber} />
        ))}
      </>
    );
  }
    `;

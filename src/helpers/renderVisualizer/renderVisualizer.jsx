import React from "react";
import "./style.css";

const RenderVisualizer = (props) => {
  const rand = Math.random();
  return (
    <div key={rand} className="rerenderAnimation">
      {props.children}
    </div>
  );
};

export default RenderVisualizer;

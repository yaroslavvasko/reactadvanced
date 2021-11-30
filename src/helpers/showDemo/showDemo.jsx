import React, { useState } from "react";
import "./style.css";

const ShowDemo = ({ children }) => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  return show ? (
    <>{children}</>
  ) : (
    <div onClick={onShow} className="showButton">
      DEMO
    </div>
  );
};

export default ShowDemo;

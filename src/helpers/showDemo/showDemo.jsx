import React, { useState } from "react";
import "./style.css";

const ShowDemo = ({ children }) => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  const onHide = () => setShow(false);

  return (
    <div className="demoCointainer">
      {show ? (
        <>
          <div onClick={onHide} className="bigButton hideButton">
            HIDE
          </div>
          {children}
        </>
      ) : (
        <div onClick={onShow} className="bigButton showButton">
          DEMO
        </div>
      )}
    </div>
  );
};

export default ShowDemo;

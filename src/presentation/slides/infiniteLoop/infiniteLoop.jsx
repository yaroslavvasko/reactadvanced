import React, { useEffect, useState } from "react";
import { getNyanCat } from "./getNyanCat";

export const LoopBad = () => {
  const [imgUrl, setImgUrl] = useState("");

  getNyanCat().then((url) => setImgUrl(url));

  return <img src={imgUrl} alt="nyan cat" />;
};

export const LoopBadCode = `
    const App =  () => {
        const [imgUrl, setImgUrl] = useState("");
    
        getImgUrl().then((url) => setImgUrl(url));
    
        return <img src={imgUrl} />;
  };
`;

export const NoLoop = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    getNyanCat().then((url) => setImgUrl(url));
  }, []);

  return <img src={imgUrl} alt="nyan cat" />;
};

export const NoLoopCode = `
    const App = () => {
        const [imgUrl, setImgUrl] = useState("");

        useEffect(() => {
            getNyanCat().then((url) => setImgUrl(url));
        }, [])
        
        return <img src={imgUrl} />;
    };
`;

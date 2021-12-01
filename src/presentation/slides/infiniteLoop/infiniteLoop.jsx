import React, { useEffect, useState } from "react";
import { getNyanCat } from "./getNyanCat";

export const LoopBad = () => {
  const [imgUrl, setImgUrl] = useState({ url: "" });

  getNyanCat().then((url) => setImgUrl({ url }));

  return <img src={imgUrl.url} alt="nyan cat" />;
};

export const LoopBadCode = `
    const App =  () => {
        const [imgUrl, setImgUrl] = useState({ url: "" });
    
        getImgUrl().then((url) => setImgUrl({url}));
    
        return <img src={imgUrl.url} />;
  };
`;

export const NoLoop = () => {
  const [imgUrl, setImgUrl] = useState({ url: "" });

  useEffect(() => {
    getNyanCat().then((url) => setImgUrl({ url }));
  }, []);

  return <img src={imgUrl.url} alt="nyan cat" />;
};

export const NoLoopCode = `
    const App = () => {
        const [imgUrl, setImgUrl] = useState({url: ""});

        useEffect(() => {
            getNyanCat().then((url) => setImgUrl({url}));
        }, [])
        
        return <img src={imgUrl.url} />;
    };
`;

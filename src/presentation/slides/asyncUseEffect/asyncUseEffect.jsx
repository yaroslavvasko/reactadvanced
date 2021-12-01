import React, { useEffect, useState } from "react";

const fruitsNames = [
  { id: 1, name: "Grape" },
  { id: 2, name: "Strawberry" },
  { id: 3, name: "Watermelon" },
  { id: 4, name: "Banana" },
  { id: 5, name: "Cherries" },
  { id: 6, name: "Mango" },
  { id: 7, name: "Kiwi" },
];

const fruitsIcons = [
  { id: 1, icon: "🍇" },
  { id: 2, icon: "🍓" },
  { id: 3, icon: "🍉" },
  { id: 4, icon: "🍌" },
  { id: 5, icon: "🍒" },
  { id: 6, icon: "🥭" },
  { id: 7, icon: "🥝" },
];

const fruitStyle = { margin: 0, cursor: "pointer" };

const getFruitIconAsync = (fruit) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      const icon = fruitsIcons.filter((f) => f.id === fruit.id)[0].icon;
      resolve(icon);
    }, 2000 / fruit.id);
  });

const FruitIcon = ({ selectedFruit }) => {
  const [selectedIcon, setSelectedIcon] = useState();

  const onFruitSelected = async (fruit) => {
    const icon = await getFruitIconAsync(fruit);
    setSelectedIcon(icon);
  };

  useEffect(() => {
    onFruitSelected(selectedFruit);
  }, [selectedFruit]);

  return <i>{selectedIcon}</i>;
};

export const AsyncUseEffectBad = () => {
  const [selectedFruit, setSelectedFruit] = useState(fruitsNames[0]);

  return (
    <>
      {fruitsNames.map((fruit) => (
        <p
          key={fruit.id}
          onClick={() => setSelectedFruit(fruit)}
          style={fruitStyle}
        >
          {fruit.name}
        </p>
      ))}

      <FruitIcon selectedFruit={selectedFruit} />
    </>
  );
};

export const AsyncUseEffectBadCode = `
const FruitIcon = ({ selectedFruit }) => {
    const [selectedIcon, setSelectedIcon] = useState();    
    const onFruitSelected = async (fruit) => {
        const icon = await getFruitIconAsync(fruit);
        setSelectedIcon(icon);
    };    
    useEffect(() => {onFruitSelected(selectedFruit);}, [selectedFruit]);

    return <i>{selectedIcon}</i>;
};

const App = () => {
    const [selectedFruit, setSelectedFruit] = useState(fruitsNames[0]);

    return <> 
        fruitsNames.map(fruit => 
            <p key={fruit.id} onClick={() => setSelectedFruit(fruit)}>{fruit.name}</p>)  
        <FruitIcon selectedFruit={selectedFruit} />
        </>
    );
};
`;

const FruitIconAsync = ({ selectedFruit }) => {
  const [selectedIcon, setSelectedIcon] = useState();

  useEffect(() => {
    let canceled = false;

    const onFruitSelected = async (fruit) => {
      const icon = await getFruitIconAsync(fruit);
      if (!canceled) setSelectedIcon(icon);
    };

    onFruitSelected(selectedFruit);
    return () => (canceled = true);
  }, [selectedFruit]);

  return <i>{selectedIcon}</i>;
};

export const AsyncUseEffectGood = () => {
  const [selectedFruit, setSelectedFruit] = useState(fruitsNames[0]);

  return (
    <>
      {fruitsNames.map((fruit) => (
        <p
          key={fruit.id}
          onClick={() => setSelectedFruit(fruit)}
          style={fruitStyle}
        >
          {fruit.name}
        </p>
      ))}

      <FruitIconAsync selectedFruit={selectedFruit} />
    </>
  );
};

export const AsyncUseEffectGoodCode = `
const FruitIcon = ({ selectedFruit }) => {
    const [selectedIcon, setSelectedIcon] = useState();  

    useEffect(() => {
        let canceled = false;    
        const onFruitSelected = async (fruit) => {
          const icon = await getFruitIconAsync(fruit);
          if (!canceled) setSelectedIcon(icon);
        };
    
        onFruitSelected(selectedFruit);
        return () => (canceled = true);
      }, [selectedFruit]);

    return <i>{selectedIcon}</i>;
};
`;

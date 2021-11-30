import { store } from "react-notifications-component";

const addNotification = () =>
  store.addNotification({
    type: "danger",
    message: "Fetching nyan cat",
    insert: "top",
    container: "bottom-center",
    dismiss: {
      duration: 500,
      onScreen: true,
    },
  });

export const getNyanCat = () =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      addNotification();
      resolve("https://c.tenor.com/ibK3fFISCygAAAAM/nyan-cat-cat.gif");
    }, 300);
  });

import { store } from "react-notifications-component";

const addNotification = (num) =>
  store.addNotification({
    type: "danger",
    message: "Calculating max",
    insert: "top",
    container: "bottom-center",
    dismiss: {
      duration: 500,
      onScreen: true,
    },
  });

export const calculateMax = (numbers) => {
  const max = Math.max(...numbers);
  addNotification(max);
  return max;
};

export const showMaxNotification = (num) =>
  store.addNotification({
    type: "success",
    message: `Max: ${num}`,
    insert: "top",
    container: "bottom-center",
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });

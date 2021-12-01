import { store } from "react-notifications-component";

export const showMessage = (msg) =>
  store.addNotification({
    type: "success",
    message: `${msg}`,
    insert: "top",
    container: "bottom-center",
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });

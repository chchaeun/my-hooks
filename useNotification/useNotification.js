
const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const notif = () => {
      if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            new Notification(title, options);
          }
        });
      }
    };
    return notif;
  };
  
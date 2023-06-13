export const confirm = (text) => {
  return new Promise((resolve, reject) => {
    if (window.Telegram.WebApp.isVersionAtLeast("6.2")) {
      window.Telegram.WebApp.showConfirm(text, (confirmed) => {
        confirmed ? resolve() : reject();
      });
    } else {
      const result = window.confirm(text);
      result ? resolve() : reject();
    }
  });
};

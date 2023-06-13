import { f7 } from "framework7-react";
import { useEffect } from "react";

const backButton = window.Telegram.WebApp.BackButton;

let isButtonShown = false;

export const BackButton = ({
  onClick = () => {
    f7.views.main.router.back();
  },
}) => {
  useEffect(() => {
    backButton.show();
    isButtonShown = true;
    return () => {
      isButtonShown = false;

      setTimeout(() => {
        if (!isButtonShown) {
          backButton.hide();
        }
      }, 10);
    };
  });

  useEffect(() => {
    window.Telegram.WebApp.onEvent("backButtonClicked", onClick);
    return () => {
      window.Telegram.WebApp.offEvent("backButtonClicked", onClick);
    };
  }, [onClick]);

  return null;
};

import { useEffect } from "react";

const mainButton = window.Telegram.WebApp.MainButton;

// eslint-disable-next-line
const { button_color, button_text_color } = window.Telegram.WebApp.themeParams;

let isButtonShown = false;

export const MainButton = ({
  disabled = false,
  color = button_color,
  textColor = button_text_color,
  text,
  onClick,
  progress = false,
}) => {
  useEffect(() => {
    mainButton.show();
    isButtonShown = true;
    return () => {
      isButtonShown = false;

      setTimeout(() => {
        if (!isButtonShown) {
          mainButton.hide();
        }
      }, 10);
    };
    // eslint-disable-next-line
  });

  useEffect(() => {
    if (progress) {
      mainButton.showProgress();
      mainButton.disable();
    } else {
      mainButton.hideProgress();
    }

    if (disabled || progress) {
      mainButton.disable();
    } else {
      mainButton.enable();
    }
  }, [disabled, progress]);

  useEffect(() => {
    mainButton.setParams({ color, text_color: textColor });
  }, [color, textColor]);

  useEffect(() => {
    mainButton.setText(text);
  }, [text]);

  useEffect(() => {
    if (onClick) {
      window.Telegram.WebApp.MainButton.onClick(onClick);
      return () => {
        window.Telegram.WebApp.MainButton.offClick(onClick);
      };
    }
  }, [onClick]);

  return null;
};

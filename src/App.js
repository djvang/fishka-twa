import { App, View } from "framework7-react";
import routes from "./routes";

const MyApp = () => {
  const WebApp = window.Telegram.WebApp;

  const theme =
    WebApp.platform === "macos" || WebApp.platform === "ios" ? "ios" : "md";
  const dark = window.Telegram.WebApp.colorScheme === "dark";

  return (
    <App theme={theme} routes={routes} dark={dark}>
      <View main className="safe-areas" url="/" />
    </App>
  );
};

export default MyApp;

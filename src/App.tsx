import { useState } from "react";
import Themes from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import AppContainer from "./components/app-container";
import { Theme, ThemeMode } from "./constants";
import { NotificationProvider } from "./models/context/notificationContext.tsx";
import { TicketProvider } from "./models/context/ticketContext.tsx";
import { Provider } from "react-redux";
import { store } from "./models/redux/store.ts";
import { ModalProvider } from "./models/context/modalContext.tsx";
function App() {
  const [theme, setTheme] = useState<Theme>({
    themeMode: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  });

  const handleSetTheme = (themeMode: ThemeMode) => {
    setTheme((prevState) => ({ ...prevState, themeMode }));
  };

  return (
    <Provider store={store}>
      <NotificationProvider>
        <TicketProvider>
          <ModalProvider>
            <ThemeProvider theme={Themes[theme.themeMode]}>
              <AppContainer theme={theme} setTheme={handleSetTheme} />
            </ThemeProvider>
          </ModalProvider>
        </TicketProvider>
      </NotificationProvider>
    </Provider>
  );
}

export default App;

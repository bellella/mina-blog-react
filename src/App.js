import "./styles/style.scss";
import Router from "./Router";
import StyleControl from "./styles/StyleControl";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { useInitialize } from "./hooks/queries/usePostQuery";

function App() {
  useInitialize();
  return (
      <ThemeProvider theme={theme}>
        <Router />
        <StyleControl/>
      </ThemeProvider>
  );
}

export default App;

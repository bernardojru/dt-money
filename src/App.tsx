import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>...</h1>
      </div>
    </ThemeProvider>
  );
}

import { ThemeProvider } from "@mui/material/styles";
import { Fragment } from "react";
import Header from "./ui/Header";
import theme from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;

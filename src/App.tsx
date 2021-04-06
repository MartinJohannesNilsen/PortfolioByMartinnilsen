import { CssBaseline } from "@material-ui/core";
import ThemeProvider from "./ThemeProvider";
import Homepage from "./views/Homepage";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;

import RootPage from "./pages";
import { useRoutes } from "react-router-dom";
import dataRoutes from "./routes/dataRoutes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  const content = useRoutes(dataRoutes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootPage content={content} />
    </ThemeProvider>
  );
}

export default App;

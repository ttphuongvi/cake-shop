import RootPage from "./pages";
import { useRoutes } from "react-router-dom";
import dataRoutes from "./routes/dataRoutes";

function App() {
  const content = useRoutes(dataRoutes);

  return <RootPage content={content}>as</RootPage>;
}

export default App;

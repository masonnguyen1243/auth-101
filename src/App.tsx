import { MainRouter } from "routes";
import "./styles/index.css";
import { ThemesControl } from "components";

const App = () => {
  return (
    <div className="h-screen w-screen bg-baseBackground">
      <h1 className="text-3xl font-bold text-primary underline">Hello Mason</h1>
      <ThemesControl />
      <MainRouter />
    </div>
  );
};

export default App;

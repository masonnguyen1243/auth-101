import "./styles/index.css";
// import ThemesControl from "components/theme-control/ThemesControl";
import { ThemesControl } from "components";

const App = () => {
  return (
    <div className="bg-baseBackground h-screen w-screen">
      <h1 className="text-primary text-3xl font-bold underline">Hello Mason</h1>
      <ThemesControl />
    </div>
  );
};

export default App;

import style from "./App.module.css";
import { Header } from "./Components/Header";
import { Vector } from "./Components/Vector";
import { Info } from "./Components/Info";

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Vector />
      <Info />
    </div>
  );
}

export default App;

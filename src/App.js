import style from "./App.module.css";
import { Header } from "./Components/Header";
import { Vector } from "./Components/Vector";

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Vector />
    </div>
  );
}

export default App;

import style from "./App.module.css";
import { Header } from "./Components/Header";
import { Vector } from "./Components/Vector";
import { Info } from "./Components/Info";
import { Photo } from "./Components/Photo";
import { About } from "./Components/About";

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Vector />
      <Info />
      <Photo />
      <About />
    </div>
  );
}

export default App;

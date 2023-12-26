import style from "./App.module.css";
import { Header } from "./Components/Header";
import { Vector } from "./Components/Vector";
import { Info } from "./Components/Info";
import { Photo } from "./Components/Photo";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Vector />
      <Info />
      <Photo />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;

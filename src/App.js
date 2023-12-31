import style from "./App.module.css";
import { Header } from "./Components/Header";
import { Vector } from "./Components/Vector";
import { Info } from "./Components/Info";
import { Photo } from "./Components/Photo";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Education } from "./Components/Education";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className={style.page}>
      <div>
        <img className={style.arrow} src="img/arrow.svg" alt="arrow" />
      </div>
      <Header />
      <Vector />
      <Info />
      <Photo />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

import style from "./App.module.css";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className={style.page}>
      <Header />
    </div>
  );
}

export default App;

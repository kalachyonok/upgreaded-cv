import style from "./Header.module.css";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Nav />
      </header>
    </div>
  );
};

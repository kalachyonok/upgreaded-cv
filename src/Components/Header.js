import style from "./Header.module.css";
import { Nav } from "./Nav";
import { Container } from "../Wrappers/Container";

export const Header = () => {
  return (
    <Container>
      <header className={style.header}>
        <Nav />
      </header>
    </Container>
  );
};

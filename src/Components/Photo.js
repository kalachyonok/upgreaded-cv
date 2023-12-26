import { Container } from "../Wrappers/Container";
import style from "./Photo.module.css";

export const Photo = () => {
  return (
    <Container>
      <div>
        <img className={style.author} src="img/photo.jpg" alt="me" />
      </div>
    </Container>
  );
};

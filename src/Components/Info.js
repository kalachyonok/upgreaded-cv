import style from "./Info.module.css";
import { Container } from "../Wrappers/Container";

export const Info = () => {
  return (
    <Container>
      <div className={style.name}>
        <div className={style.personal}>Olga Kalacheva</div>
        <div className={style.profile}>Frontend developer, Batumi</div>
        <div className={style.languages}>
          <span>RU</span>
          <span className={style.dividing}>|</span>
          <span className={style.active}>ENG</span>
        </div>
      </div>
    </Container>
  );
};

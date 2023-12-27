import { Container } from "../Wrappers/Container";
import style from "./Education.module.css";

export const Education = () => {
  return (
    <Container>
      <div className={style.education}>
        <h3 id="education" className={style.header}>
          Education
        </h3>
        <div className={style.content}>
          <div>BELARUS STATE ECONOMIC UNIVERSITY - master degree</div>
          <div>
            <b>English</b> - B1 | <b>French</b> - A2 | <b>Russian</b> - native |{" "}
            <b>Belarusian</b> - C1
          </div>
        </div>
      </div>
    </Container>
  );
};

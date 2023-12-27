import { Container } from "../Wrappers/Container";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <Container>
      <footer className={style.footer}>
        <div>
          <a
            href="https://www.codewars.com/users/Kalachik"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={style.codewars}
              src="img/codewars.svg"
              alt="codewars"
            />
          </a>
        </div>
        <div>
          <div className={style.date}>December 2023</div>
          <div className={style.info}>by Kalachyonok</div>
        </div>

        <div className={style.git}>
          <a
            href="https://github.com/kalachyonok"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={style.item}
              src="img/github_original_wordmark_logo_icon_146506.svg"
              alt="github Kalachyonok"
            />
          </a>
        </div>
      </footer>
    </Container>
  );
};

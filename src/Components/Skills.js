import style from "./Skills.module.css";
import { Container } from "../Wrappers/Container";

export const Skills = () => {
  return (
    <Container>
      <h2 id="skills" className={style.skills}>
        Skills
      </h2>
      <div className={style.text}>I work in such programs as</div>

      <ul className={style.list}>
        <li className={style.frame}>
          <div>
            <img
              className={style.item}
              src="img/html-svgrepo-com.svg"
              alt="HTML"
            />
          </div>
          <div className={style.name}>HTML</div>
          <div className={style.star}>★ ★ ★ ★ ★</div>
        </li>
        <li className={style.frame}>
          <div>
            <img
              className={style.item}
              src="img/figma-svgrepo-com.svg"
              alt="FIGMA"
            />
          </div>
          <div className={style.name}>FIGMA</div>
          <div className={style.star}>★ ★ ★ ★ ☆</div>
        </li>
        <li className={style.frame}>
          <div>
            <img className={style.item} src="img/js.svg" alt="JS" />
          </div>
          <div className={style.name}>JS</div>
          <div className={style.star}>★ ★ ★ ★ ☆</div>
        </li>
        <li className={style.frame}>
          <div>
            <img
              className={style.item}
              src="img/github_original_wordmark_logo_icon_146506.svg"
              alt="GIT HUB"
            />
          </div>
          <div className={style.name}>GIT HUB</div>
          <div className={style.star}>★ ★ ★ ★ ☆</div>
        </li>
        <li className={style.frame}>
          <div>
            <img className={style.item} src="img/css.svg" alt="CSS" />
          </div>
          <div className={style.name}>CSS</div>
          <div className={style.star}>★ ★ ★ ★ ☆</div>
        </li>
        <li className={style.frame}>
          <div>
            <img className={style.item} src="img/react.svg" alt="React" />
          </div>
          <div className={style.name}>React</div>
          <div className={style.star}>★ ★ ★ ★ ☆</div>
        </li>
      </ul>
    </Container>
  );
};

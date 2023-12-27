import style from "./Portfolio.module.css";
import { Container } from "../Wrappers/Container";
import { ColoredWrapper } from "../Wrappers/ColoredWrapper";

export const Portfolio = () => {
  return (
    <ColoredWrapper>
      <Container>
        <div className={style.portfolio}>
          <h2 id="portfolio" className={style.header}>
            Portfolio
          </h2>

          <pre className={style.border}>
            <code className={style.code}>
              {`function greeting {
  console.log("Hello World!");
 }`}
            </code>
          </pre>

          <div className={style.subtitle}>examples of training projects</div>
          <div className={style.projects}>
            <div>
              <a
                href="https://kalachyonok-plants-part3.netlify.app/#about"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.pictures}
                  src="img/plants.jpg"
                  alt="plants"
                />
              </a>
            </div>

            <div>
              <a
                href="https://travelling-site-example.netlify.app/#second"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.pictures}
                  src="img/travel.jpg"
                  alt="travel"
                />
              </a>
            </div>

            <div>
              <a
                href="https://kalachyonok.github.io/form/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.pictures}
                  src="img/registration.jpg"
                  alt="registration"
                />
              </a>
            </div>

            <div>
              <a
                href="https://kalachyonok.github.io/modal-window-flex/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.pictures}
                  src="img/modal-window.jpg"
                  alt="modal-window"
                />
              </a>
            </div>

            <div>
              <a
                href="https://bespoke-snickerdoodle-9da94b.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={style.pictures} src="img/todo.jpg" alt="todo" />
              </a>
            </div>

            <div>
              <a
                href="https://day-quote.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.pictures}
                  src="img/quotes.jpg"
                  alt="quotes"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </ColoredWrapper>
  );
};

import { ColoredWrapper } from "../Wrappers/ColoredWrapper";
import { Container } from "../Wrappers/Container";
import style from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <ColoredWrapper>
      <Container>
        <div className={style.contacts}>
          <h2 id="contacts" className={style.header}>
            Contacts
          </h2>
          <div className={style.subtitle}>
            Want to know more or just chat? You are welcome!
          </div>
          <a className={style.btn} href="mailto:olga.calachyowa@yandex.by">
            Send message
          </a>
          <ul className={style.links}>
            <li>
              <a
                href="https://www.linkedin.com/in/olga-kalacheva/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.item}
                  src="img/Linkedin.svg"
                  alt="linkedIn"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/calachyonok/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.item}
                  src="img/instagram.svg"
                  alt="instagram"
                />
              </a>
            </li>

            <li>
              <a
                href="https://t.me/calachyonok"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.item}
                  src="img/Telegram.svg"
                  alt="telegram"
                />
              </a>
            </li>

            <li>
              <a
                href="https://vk.com/id95509983"
                target="_blank"
                rel="noreferrer"
              >
                <img className={style.item} src="img/вконтакте.svg" alt="vk" />
              </a>
            </li>
          </ul>
          <div className={style.info}>
            <p>Like me on</p>
            <p>LinkedIn, Instagram, Telegram, Vk</p>
          </div>
        </div>
      </Container>
    </ColoredWrapper>
  );
};

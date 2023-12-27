import style from "./About.module.css";
import { Container } from "../Wrappers/Container";
import { ColoredWrapper } from "../Wrappers/ColoredWrapper";

export const About = () => {
  return (
    <ColoredWrapper>
      <Container>
        <div className={style.about}>
          <h2 className={style.title} id="about">
            About me
          </h2>
          <div className={style.content}>
            <p>
              I am a{" "}
              <span className={style.span}>beginner frontend developer</span>{" "}
              eager to delve into coding. After 8 years in marketing, I've
              recognized the increasing impact of digital technologies and
              programming in our lives.
            </p>

            <p>
              I am committed to transitioning my career into this{" "}
              <span className={style.span}>new direction</span> and I am
              enthusiastic about the opportunities it presents. I'm excited to
              embark on this journey and look forward to growing and
              contributing in the world of frontend development.
            </p>
          </div>
        </div>
      </Container>
    </ColoredWrapper>
  );
};

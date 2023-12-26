import style from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav>
      <ul className={style.nav}>
        <li>
          <a className={style.link} href="#nav">
            Home
          </a>
        </li>
        <li>
          <a className={style.link} href="#about-me">
            About me
          </a>
        </li>
        <li>
          <a className={style.link} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className={style.link} href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className={style.link} href="#education">
            Education
          </a>
        </li>
        <li>
          <a className={style.link} href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

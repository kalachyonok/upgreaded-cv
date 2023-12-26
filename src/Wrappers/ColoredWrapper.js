import style from "./ColoredWrapper.module.css";

export const ColoredWrapper = (props) => {
  return <div className={style.colored}>{props.children}</div>;
};

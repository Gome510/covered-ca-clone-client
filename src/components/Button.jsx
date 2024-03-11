function Button({ text, theme, custom }) {
  return <button className={` ${custom}`}>{text} </button>;
}
export default Button;

import "./MyButton.css";

const MyButton = ({ text, onClickProp }) => (
  <button onClick={onClickProp} className="button">
    {text}
  </button>
);

export default MyButton;

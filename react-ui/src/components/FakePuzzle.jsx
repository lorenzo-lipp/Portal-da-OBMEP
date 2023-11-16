import "./css/FakePuzzle.css";

export default function FakePuzzle({ showIf }) {
  let className = "fakePuzzle ";
  if (showIf.includes(2)) className += "showWithTwo ";
  if (showIf.includes(3)) className += "showWithThree ";
  if (showIf.includes(4)) className += "showWithFour";
  return (<div className={className} />);
}
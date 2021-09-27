import { useState } from "react";

function TextRepeaterButton() {

  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  for(let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>)
  }

  const clickHandle = () => {
    setRepetitions(repetitions + 1);
  }

  return (
    <button className="TextRepeaterButton" onClick={clickHandle}>
      {textArray}
    </button>
  )
}

export default TextRepeaterButton;
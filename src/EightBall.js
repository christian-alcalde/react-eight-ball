import React, { useState } from "react";
import getRandomIndex from "./randomNum";

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

function EightBall({ answers = ANSWERS }) {
  const [question, setQuestion] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  let eightBallStyling = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: "24px",
    height: "500px",
    width: "500px",
    color: "white",
    backgroundColor: question.color,
  };

  function getAnswer() {
    const index = getRandomIndex(answers.length);
    setQuestion(answers[index]);
  }

  return (
    <div onClick={getAnswer} style={eightBallStyling}>
      <p>{question.msg}</p>
    </div>
  );
}

export default EightBall;

import React from 'react'

const Box = (props) => {
  let result;
  if (props.title === "YOU" && props.result !== "tie" && props.result !== "") {
    result = props.result === "win" ? "YOU WIN!" : "YOU LOSE!";
  } else if (props.title === "computer" && props.result !== "tie" && props.result !== "") {
    result = props.result === "win" ? "YOU LOSE!" : "YOU WIN!";
  } else {
    result = props.result;
  }
    console.log("props:",props);
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img}></img>
      <h1>{result}</h1>
       </div>
  );
};

export default Box

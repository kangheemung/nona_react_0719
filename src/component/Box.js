import React from 'react'

const Box = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) { // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {// 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result);
  }



  console.log("props:", props);
  return (
    <div  className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-test id="item-name">{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h1>{result}</h1>
    </div>
  );
};

export default Box

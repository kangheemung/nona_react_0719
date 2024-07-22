import React, { useState } from "react";
import './App.css';
import Box from "./component/Box";

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    setCounter2(counter2 + 1);
  };

//유조거 버튼을 클릭한다/
//2.counter+1에서 1이됨
//3. setState 함수호출
//4. console.log실행됨
//변수값은 1로 보이고 state 값음아직 안변했기 때문에 그전에 보인다
//함수끝
//app 다시 re render 
//let counter=0을 거치면서 counter 값은 다시 0으로 초기화된다.
//state 값은 업데이트된 state가  되면서 다시 render

//사진 아이템 객체 만들기

const choice = {
  rock: {
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxL1231cJvvm3a7E3HN8Mmyej3YoreJbcMg&s"
  },
  scissors:{
    name:"Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgjYmdf7JL7QqunSEhwetzzgXOxGJr9nx6w&s"
  },
  paper:{
    name:"paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmvDzIfJNpT_YiYFCS6dLNNZEeoohW_qlyw&s"
  }
}


const play = (userChoice) => {
  setUserSelect(choice[userChoice]);
  let computerChoice = randomChoice();
  setComputerSelect(computerChoice);
};

//랜덤한 숫자 
const randomChoice = () => {
  let itemArray=Object.keys(choice);//객체에ㅔ 키값만 뽑아서 배열로 만들어 준다.
  console.log(choice)
  // 랜덤한 아이템 선택 로직 구현
  let randomItem = Math.floor(Math.random() * itemArray.length);
  let final= itemArray[randomItem]
  console.log("final", final);
  // 실제로 선택된 아이템 반환
  return choice[ final]; // 랜덤으로 선정하도록 수정 필요
}

return (
  <>
      <div >
        <div>state: {counter2}</div>
        <button onClick={increase}>클릭!</button>
        <div className='main'>
          <Box title="YOU" item={userSelect} num={1} />
          <Box title="computer" item={computerSelect} num={2} />
        </div>
        <div className="main">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
        </div>
      </div>
  </>
);
}

export default App;
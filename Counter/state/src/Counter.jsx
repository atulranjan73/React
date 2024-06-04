import { useState } from "react";

function Counter() {
  // what is state //   it is variable
  // the current state of any components /element at given time

  //hooks are function in react with the word use attached in the begining of name of the function
  const [Counter, setcounter] = useState(0);

  // let count = 0 ;

  function handleplus() {
    setcounter(Counter + 1);
  }
  function handleminus() {
    setcounter(Counter - 1);
  }
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <button onClick={handleplus}>+</button>
        <p>{Counter}</p>
        <button onClick={handleminus}>-</button>
      </div>
    </>
  );
}
export default Counter;
 
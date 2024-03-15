import { useState } from "react";

const Arithmetic = () => {
  const [count, setCount] = useState(0);

  // const add = ()=> {
  //     return setCount(count = 1)
  // }

  // const sub = ()=> {
  //     return (count > 0) ? setCount(count - 1) : 0
  // }
  return (
    <>
      <div className="func">
        <button onClick={() => setCount(count + 1)}>Addition</button>

        <h1> {count} </h1>

        <button
          onClick={() => {
            if (count > 0) {
              return setCount(count - 1);
            }
          }}
        >
          Subtraction
        </button>
      </div>
    </>
  );
};

export default Arithmetic;

import { useEffect, useState } from "react";

/* TASK 2 Fix infinite loop 

- For this task you will need to set up the useEffect() hook properly to avoid infinite loops. (A limit of 500000 iterations as a safety feature has been set up) After the page is rendered, you should see the following displayed: 'Counter = 1'. Use the console in the browser to get a hint from the error message. Once you have a solution, refresh the page to see if the infinite loop has been eliminated.*/

const Task2 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Do not change code below this line
    if (counter < 500000) {
      setCounter((counter) => counter + 1);
      console.log(counter, "<<< counter here");
    }
    //Do not change code above this line
  },[]);

  return (
    <div>
      <h2>Task 2 - Fix the infinite loop</h2>
      <h3>Counter = {counter}</h3>
    </div>
  );
};

export default Task2;

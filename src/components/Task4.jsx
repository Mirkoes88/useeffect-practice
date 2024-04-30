import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import styles from "../styles/Task4.module.css";

/* TASK 4 Trigger confetti with all buttons

- Here you need to make sure that you can trigger the confetti with each button */

const Task4 = () => {
  const [sprinkle, setSprinkle] = useState(false);
  const [toggleButton1, setToggleButton1] = useState(false);
  const [toggleButton2, setToggleButton2] = useState(false);
  const [toggleButton3, setToggleButton3] = useState(false);
  const [toggleButton4, setToggleButton4] = useState(false);
  const [areButtonsEnabled, setAreButtonsEnabled] = useState(false);
  useEffect(() => {
    //Do not change anything in this callback function
    setSprinkle(true);
    setTimeout(() => {
      setAreButtonsEnabled(false);
      setSprinkle(false);
    }, 3000);
    setAreButtonsEnabled(true);
  }, [toggleButton1, toggleButton2, toggleButton3, toggleButton4]);

  return (
    <div>
      {sprinkle ? (
        <div className={styles.confetti}>
          <Confetti
            tweenDuration={1000}
            numberOfPieces={200}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.buttonContainer}>
        <button
          disabled={areButtonsEnabled}
          onClick={() => {
            setToggleButton1((toggleButton1) => !toggleButton1);
          }}
        >
          Click me
        </button>
        <button
          disabled={areButtonsEnabled}
          onClick={() => {
            setToggleButton2((toggleButton2) => !toggleButton2);
          }}
        >
          Click me
        </button>
        <button
          disabled={areButtonsEnabled}
          onClick={() => {
            setToggleButton3((toggleButton3) => !toggleButton3);
          }}
        >
          Click me
        </button>
        <button
          disabled={areButtonsEnabled}
          onClick={() => {
            setToggleButton4((toggleButton4) => !toggleButton4);
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Task4;

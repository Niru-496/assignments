import { useState, useEffect, useRef } from "react";
export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunnig, setisRunning] = useState(false);
  const timerRef = useRef();
  useEffect(() => {
    startTimer();
    return pauseTimer;
  }, []);
  const startTimer = () => {
    if (isRunnig) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setisRunning(true);
  };
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setisRunning(false);
  };
  return (
    <div>
      <h2>{timer}</h2>
      <br />
      <button disabled={isRunnig} onClick={startTimer}>
        Resume
      </button>
      <br />
      <button disabled={!isRunnig} onClick={pauseTimer}>
        Pause
      </button>
    </div>
  );
};

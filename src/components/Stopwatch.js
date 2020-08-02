import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    setCentiseconds(0 + (Math.floor(timerTime / 10) % 100));
    setSeconds(
      (Math.floor(timerTime / 1000) % 60) - (Math.floor(timerStart / 1000) % 60)
    );
    setMinutes(0 + (Math.floor(timerTime / 60000) % 60));
    setHours(0 + Math.floor(timerTime / 3600000));
  }, [timerTime]);

  const startTimer = () => {
    setTimerOn(true);
    setTimerTime(timerTime);
    setTimerStart(Date.now() - timerTime);

    setInterval(() => {
      setTimerTime(Date.now() - timerStart);
      setTime(timerTime - timerStart);
    }, 10);
  };
  return (
    <div>
      <p>{seconds}</p>
      <button onClick={() => startTimer()}>Start Timer</button>
    </div>
  );
}

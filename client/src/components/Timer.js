import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Timer() {

  let navigate = useNavigate();

  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      // Timer has reached 0, display alert
      alert('Time Up!');
      navigate("/");
    };
  }, [seconds]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h3 style={{color : "#FFF"}}>Timer</h3>
      <h2 style={{color : "#FFF"}}>{formatTime(seconds)}</h2>
    </div>
  );
};

export default Timer;

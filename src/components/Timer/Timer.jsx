import React, { useEffect, useState } from 'react';

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (paused || over) return;

    if (m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([59, 59]);
    } else if (s == 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

    useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className='timer'>
      <img src="https://svgshare.com/i/qqR.svg"></img>
      <p>{`${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
      <div>{over ? "Время вышло" : ''}</div>
    </div>
  );
};

export default Timer;
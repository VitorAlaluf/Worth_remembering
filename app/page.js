"use client"

import { useState, useEffect } from 'react';

const calculateTimeElapsed = (startDate) => {
  const currentDate = new Date();
  const difference = currentDate - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.round((difference % (1000 * 60)) / 1000);

  const totalDays = Math.round(difference / (1000 * 60 * 60 * 24));
  const totalHours = Math.round(difference / (1000 * 60 * 60));
  const totalMinutes = Math.round(difference / (1000 * 60));
  const totalSeconds = Math.round(difference / 1000);

  return { days, hours, minutes, seconds, totalDays, totalHours, totalMinutes, totalSeconds };
};

const Index = () => {
  const startDate = new Date('2023-10-07T19:00:00');
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed(startDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed(startDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

/*
  <p>Days: {timeElapsed.days}</p>
  <p>Hours: {timeElapsed.hours}</p>
  <p>Minutes: {timeElapsed.minutes}</p>
  <p>Seconds: {timeElapsed.seconds}</p>
 */


  return (
    <div className="center">
      <div className="body">
        <p className="DATA">Desde o dia <b className="data_casamento">{startDate.toLocaleDateString()}</b></p>
        <p className="DIAS">Vivemos <b className="horas_casamento">{timeElapsed.totalDays}</b> "bom dia amor"</p>
        <p className="HORAS"><b className="horas_casamento">{timeElapsed.totalHours}</b> momentos juntos</p>
        <p className="MINUTOS"><b className="minutos_casamento">{timeElapsed.totalMinutes}</b> "eu te amo"</p>
        <p className="SEGUNDOS">E <b className="segundos_casamento">{timeElapsed.totalSeconds}</b> vezes que eu pensei em você</p>
      </div>
    </div>
  );
};

export default Index;

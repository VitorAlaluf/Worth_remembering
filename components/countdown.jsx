"use client"
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const targetDate = new Date('2023-07-10T19:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Vivenciamos {timeRemaining.days} alvoradas</p>
      <p>{timeRemaining.hours} hours</p>    
      <p>{timeRemaining.minutes} minutes</p>
      <p>{timeRemaining.seconds} seconds</p>
    </div>
  );
};

export default Countdown;

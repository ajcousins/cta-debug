import { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
/* eslint-disable */
const timeLeft = (scheduledTime: Moment): number => {
  const now = moment().utc();
  // eslint-disable-next-line no-console
  console.log('now:', now);
  return scheduledTime.diff(now);
};

const useCountdown = (timeInFuture: Moment | null): boolean => {
  const initialState = timeInFuture ? timeLeft(timeInFuture) < 1 : true;
  const [isExpired, setIsExpired] = useState(initialState);

  useEffect(() => {
    console.log("useEffect");
    if (isExpired || !timeInFuture) return;
    const countdown = setInterval(() => {
      // eslint-disable-next-line no-console
      console.log('timeLeft:', timeLeft(timeInFuture));
      if (timeLeft(timeInFuture) < 1) {
        setIsExpired(true);
      }
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(countdown);
    };
  }, [timeInFuture]);

  return isExpired;
};

export default useCountdown;

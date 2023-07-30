import React, { useState, useEffect } from "react";
function unixTimestampToReadableDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${month}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}

const ElectionStatusNavbar = (props) => {
  const { elStarted, elEnded, startDate, endDate } = props;
  const now = Math.floor(Date.now() / 1000); // Get current UNIX timestamp
  const finalStart = unixTimestampToReadableDate(startDate);
  const finalEnd = unixTimestampToReadableDate(endDate);

  const [remainingTime, setRemainingTime] = useState(endDate - now);

  useEffect(() => {
    // Update the remaining time every second
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      setRemainingTime(endDate - currentTime);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [endDate]);

  if (!elStarted && !elEnded) {
    return <div>Election not started</div>;
  } else if (elStarted && !elEnded) {
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;

    return (
      <div>
        Election in progress: {days}d {hours}h {minutes}m {seconds}s remaining
      </div>
    );
  } 
  return <div> Election Ended</div>
};


export default ElectionStatusNavbar;

import React from "react";

let DateTime = () => {
  let showDate = new Date();
  let currentDate =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    ":" +
    showDate.getSeconds();

  return <div>{currentDate}</div>;
};

export default DateTime;

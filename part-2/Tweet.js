"use strict";

function Tweet({ username, date, message }) {
  const style = {
    backgroundColor: "red",
    color: "yellow",
  };
  return (
    <div style={style}>
      <p> Username: {username} </p>
      <p> Date: {date} </p>
      <p> Message: {message} </p>
    </div>
  );
}

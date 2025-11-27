import React from "react";

function Task({ category, text, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onDeleteTask(text)}>X</button>
    </div>
  );
}

export default Task;


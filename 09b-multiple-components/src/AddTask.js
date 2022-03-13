import React from "react";

export default function AddTask(props) {
  return (
    <React.Fragment>
      <h2>Create new Task</h2>
      <div>
        <label>Task Description</label>
        <input
          type="text"
          name="newTask"
          value={props.newTask}
          onChange={props.updateFormField}
        />
        <button onClick={props.addTask}>Add</button>
      </div>
    </React.Fragment>
  );
}
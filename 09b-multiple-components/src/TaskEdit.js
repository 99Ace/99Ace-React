import React from "react";

export default function TaskEdit(props) {
    return (
        <li key={props.item.id}>
            <input
                type="text"
                name="editedTaskName"
                value={props.editedTaskName}
                onChange={props.updateFormField}
            />
            <button onClick={ ()=>{
                props.updateEditedTask(props.item)
                }
            }
            >Update</button>
        </li>
    )
}
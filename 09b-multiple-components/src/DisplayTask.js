import React from "react";

export default function DisplayTask(props) {

    return (
        <li key={props.item.id}>{props.item.task}
            <input
                name="done"
                type="checkbox"
                checked={props.item.done}
                onClick={ ()=>{
                    props.checkTask(props.item.id)
                } }
            />
            <button onClick={ () => {
                props.setTaskToEdit(props.item)
            }
            }>Edit</button>
            <button onClick={ ()=>{
                props.deleteTask(props.item.id)
            }
            }
            >Delete</button>
        </li>
    )
}
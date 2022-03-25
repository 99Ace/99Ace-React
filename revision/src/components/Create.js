import React from "react";

export default function Create (props) {
    return (
        <React.Fragment>
            <h1>Create</h1>
            <input 
            name="first_name" value={props.first_name} 
            onChange={props.updateFormField} 
            />
            <button onClick={props.submitForm}>Submit</button>
        </React.Fragment>
    )
}
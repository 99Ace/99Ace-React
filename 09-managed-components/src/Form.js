import React from "react";

// Modify the Form component to be a function-based component
export default function Form(props) {

    return (
        <React.Fragment>
            <div>
                <label>User name</label>
                <input
                    type="text"
                    value={props.username}
                    onChange={props.updateFormField}
                    name="username"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    value={props.email}
                    onChange={props.updateFormField}
                    name="email"
                />
            </div>
            <button onClick={props.confirm}>Update</button>

        </React.Fragment>
    )
}
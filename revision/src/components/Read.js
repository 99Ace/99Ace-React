import React from "react";

export default function Read(props) {
    return (
        <React.Fragment>
            <h1>Welcome to Soccer Academy</h1>
            {
                props.data.map(eachItem => <p> {eachItem.first_name} </p>
                )
            }
            <button onClick={ ()=> {
                props.changePage("create")
            }} >Create New Player</button> 
        </React.Fragment>

    )
}
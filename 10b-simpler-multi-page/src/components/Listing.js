import React from "react";

export default function Listing(props) {
    return (
        <React.Fragment>
            {
                props.data.map(item => <li key={item._id}>
                    {item.first_name} {item.last_name} | {item.position} |
                    <button>edit</button> | <button>delete</button>
                </li>
                )
            }
        </React.Fragment>
    )
}
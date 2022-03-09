import React from "react";

export default function Alert(props) {
    return (
        <div style={{ backgroundColor:'beige' }}>
            { props.message }
        </div>
    )
}
import React from "react";

// The NumberBox is a class that extends from the React's Component class. 
// This means that the NumberBox class has all the functionality and variables of the latter.

export default class NumberBox extends React.Component {
    // Add the state
    state = {
        count : 10
    }


    // in the React class, we ned to include render(){ return (...) }
    render() {
        return (
            <div>
                <div style={{
                    border: '1px solid',
                    padding: '10px',
                    width : '20px',
                    backgroundColor:'white'
                }}>
                    {/* Use the state value */}
                    { this.state.count }

                </div>

                <div style={{
                    border: '1px solid',
                    padding: '10px',
                    width : '20px',
                    backgroundColor:'white'
                }}>
                    {/* Use the state value */}
                    { this.props.initialValue }

                </div>
            </div>
        )
    }
}

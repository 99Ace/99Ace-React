import React from "react";

// The NumberBox is a class that extends from the React's Component class. 
// This means that the NumberBox class has all the functionality and variables of the latter.

export default class NumberBox extends React.Component {
    // Add the state
    state = {
        count : 10
    }

    // 1. Create a function to add count when clicked
    addCount =()=> {
        this.setState({
            count : this.state.count + 1
        })
    }
    // 2. Create a fundtion to minus count when clicked
    minusCount =()=> {
        this.setState({
            count : this.state.count - 1
        })
    }

    // in the React class, we ned to include render(){ return (...) }
    render() {
        return (
            <div>
                
                <div style={{
                    border: '1px solid',
                    padding: '10px',
                    minWidth : '20px',
                    backgroundColor:'white',
                    textAlign:'center',
                    // 4. Conditional rendering in CSS
                    fontSize : `${ 10 + this.state.count }px`
                }}>
                    {/* Use the state value */}
                    { this.state.count }

                </div>
                {/* 1.1 Setup the button to call the function addCount when click on */}
                <button onClick={ this.addCount }>+</button>
                {/* 1.1 Setup the button to call the function minusCount when click on */}
                <button onClick={ this.minusCount }>-</button>

                {/* 3. Adding a conditional rendering */}
                <div>
                    { this.state.count % 2 === 0 ? <p>Number is even</p> : <p>Number is odd</p>}
                </div>
            </div>
        )
    }
}

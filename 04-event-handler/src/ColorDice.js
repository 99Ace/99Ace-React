import React from "react";

// The NumberBox is a class that extends from the React's Component class. 
// This means that the NumberBox class has all the functionality and variables of the latter.

export default class NumberBox extends React.Component {
    // Add the state
    state = {
        number: 6,
        color : 'red'
    }
    rollDice =()=> {
        let newNumber = Math.floor(Math.random() * 5 + 1);
        let color
        console.log(newNumber)
        // if (newNumber==1){
        //     color='green'
        // } else if (newNumber==6){
        //     color='red'
        // } else {
        //     color= 'black'
        // }
        newNumber==1?color='green': newNumber==6?color='red':color="black"
        this.setState ({
            number:newNumber,
            color:color
        })
    }
    render() {
        return(
            <React.Fragment>
                <div style={{
                    border: '1px solid black',
                    width : '50px',
                    height : '50px',
                    textAlign:'center',
                    color : `${ this.state.color }`
                }}>
                    {this.state.number}
                </div>
                <button onClick={ this.rollDice }>Roll</button>
            </React.Fragment>
        )
    }
}

import React from "react";

// Set up NEW class + export default combine
export default class SurveyForm extends React.Component {
    
    // Set up state
    state = {
        name : 'Ace',
        color: 'red',
        country:'malaysia',
        fruits : ['apple','durian','orange']
    }

    // 1. Event handler to update
    // make sure the name of the input field is same as the state
    updateFormField =(e)=> {
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    // testing
    // updateCheckboxes =(e)=>{  
    //     if ( !this.state.fruits.includes( e.target.value ) ) {
    //         alert('no apples')
    //         // add apples to fruits
    //     }
    //     else {
    //         alert('apples')
    //         // remove apples from fruits
    //     }
    //     // set to state
    // }
    updateCheckboxes =(e)=>{
        // allows the this.updateCheckboxes to be reusable
        let currentState = this.state[e.target.name] // let currentState = this.state.fruits
        // set up to hold the modified New State
        let modifiedNewState

        // if ( !this.state.fruits.includes( e.target.value ) ) {
        if ( !currentState.includes( e.target.value ) ) {            
            // add "item" to fruits
            modifiedNewState = [
                ...currentState, // current state
                e.target.value   // + clicked checkbox
            ]
            console.log(modifiedNewState)
        }
        else {
            // remove "item" from fruits
            modifiedNewState = currentState.filter( (item)=> {
                if ( item !== e.target.value ) {
                    return true
                }
            })
            console.log(modifiedNewState)
        }
        // set to state
        this.setState({
            [e.target.name] : modifiedNewState
        })
    }




    // Render the JSX
    render() {
        return (
            <React.Fragment>
                {/* input text field */}
                <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} name='name' onChange={ this.updateFormField } />
                </div>
                {/* radio buttons */}
                <div>
                    <label>Favourite Color:</label>
                    <input type="radio" value="red" checked={this.state.color==='red'} name='color' onChange={ this.updateFormField }/> Red
                    <input type="radio" value="blue" checked={this.state.color==='blue'} name='color' onChange={ this.updateFormField }/> Blue
                    <input type="radio" value="green" checked={this.state.color==='green'} name='color' onChange={ this.updateFormField }/> Green
                </div>
                {/* select dropdown */}
                <div>
                    <label>Country:</label>
                    <select value={this.state.country} name='country' onChange={ this.updateFormField }>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                {/* checkboxes */}
                <div>
                    <label>Fruits:</label>
                    <input type="checkbox" name="fruits" value="apple" checked={ this.state.fruits.includes('apple') } onChange={ this.updateCheckboxes }/>Apple
                    <input type="checkbox" name="fruits" value="orange" checked={ this.state.fruits.includes('orange') } onChange={ this.updateCheckboxes }/>Orange
                    <input type="checkbox" name="fruits" value="pineapple" checked={ this.state.fruits.includes('pineapple') } onChange={ this.updateCheckboxes }/>Pineapple
                    <input type="checkbox" name="fruits" value="durian" checked={ this.state.fruits.includes('durian') } onChange={ this.updateCheckboxes }/>Durian
                </div>

                <button>Submit</button>

            </React.Fragment>
        )
    }
}
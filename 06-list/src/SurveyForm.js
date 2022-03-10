import React from "react";

// Set up NEW class + export default combine
export default class SurveyForm extends React.Component {
    // non-state variables
    colors=[
        {
            'display':'Red',
            'value': 'red'
        },
        {
            'display': 'Green',
            'value': 'green'
        },
        {
            'display': 'Blue',
            'value': 'blue'
        }
    ]
    countries=[
        {
            'display':'Singapore',
            'value':'singapore'
        },
        {
            'display':'Malaysia',
            'value':'malaysia'
        },
        {
            'display':'Thailand',
            'value':'thailand'
        },
        {
            'display':'Indonesia',
            'value':'indonesia'
        }
    ]
    fruits=[
        {
            'display':'Apple',
            'value':'apple'
        },
        {
            'display':'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]



    // Set up state
    state = {
        name : 'Ace',
        color: 'red',
        country:'malaysia',
        fruits : ['apple']
    }
    // METHOD I : This is using for loop to iterate through each color
    renderColors() {
        // Create empty array
        let options =[];
        // Iterate through the colors data array
        for (let eachColor of this.colors) {
            // create a radio input field for each color
            let e = (
                <React.Fragment>
                    {/* input radio */}
                    <input name="color" type="radio" value={eachColor.value} checked={ this.state.color===eachColor.value } onChange={ this.updateFormField } />
                    {/* The display wording */}
                    <span>{ eachColor.display }</span>
                </React.Fragment>
            )
            // push the input field to the options array
            options.push(e)
        }
        // return it JSX when called upon
        return options
    }
    // METHOD II : Using Map to iterate through all data
    renderCountries() {
        let options = this.countries.map( (eachCountry)=><option value={ eachCountry.value }>{ eachCountry.display }</option>
        )
        return options
    }
    // 1. Event handler to update
    // make sure the name of the input field is same as the state
    updateFormField =(e)=> {
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    // Update checkboxes
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
                    { this.renderColors() }
                </div>
                {/* select dropdown */}
                <div>
                    <label>Country:</label>
                    <select value={this.state.country} name='country' onChange={ this.updateFormField }>
                        { this.renderCountries() }
                    </select>
                </div>
                {/* checkboxes */}
                {/* <div>
                    <label>Fruits:</label>
                    <input type="checkbox" name="fruits" value="apple" checked={ this.state.fruits.includes('apple') } onChange={ this.updateCheckboxes }/>Apple
                    <input type="checkbox" name="fruits" value="orange" checked={ this.state.fruits.includes('orange') } onChange={ this.updateCheckboxes }/>Orange
                    <input type="checkbox" name="fruits" value="pineapple" checked={ this.state.fruits.includes('pineapple') } onChange={ this.updateCheckboxes }/>Pineapple
                    <input type="checkbox" name="fruits" value="durian" checked={ this.state.fruits.includes('durian') } onChange={ this.updateCheckboxes }/>Durian
                </div> */}
                <div>
                    { this.fruits.map( (eachFruit)=> {
                        return <React.Fragment>
                            <input type="checkbox" name="fruits" value={eachFruit.value} checked={ this.state.fruits.includes( eachFruit.value ) } onChange={ this.updateCheckboxes }/> { eachFruit.display }
                        </React.Fragment>

                    }) }
                </div>

                <button>Submit</button>

            </React.Fragment>
        )
    }
}
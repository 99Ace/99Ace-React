import React from "react";

export default class Booking extends React.Component {
    state = {
        fname   : '',
        lname   : '',
        seating : '',
        smoking : '',
        appetizer: []
    }

    updateFormField=(e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    updateCheckbox =(e)=>{
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

    render () {
        return (
            <React.Fragment>
                {/* fname lname */}
                <div>
                    <input type="text" name="fname" placeholder="fname" value={this.state.fname} onChange={ this.updateFormField }/>

                    <input type="text" name="lname" placeholder="lname" value={this.state.fname} onChange={ this.updateFormField }/>
                </div>
                {/* seating radio */}
                <div>
                    <input type="radio" name="seating" value="outdoors" checked={ this.state.seating==="outdoors" } onChange={ this.updateFormField }/> Outdoors
                    <input type="radio" name="seating" value="indoors" checked={ this.state.seating==="indoors" } onChange={ this.updateFormField }/> Indoors
                    <input type="radio" name="seating" value="vip" checked={ this.state.seating==="vip" } onChange={ this.updateFormField }/> Vip Indoors
                </div>
                {/* smoking dropdown */}
                <div>
                    <label>Smoking</label>
                    <select name="smoking" value={ this.state.smoking } onChange={ this.updateFormField }>
                        <option value="smoking">Smoking</option>
                        <option value="non-smoking">Non-Smoking</option>
                    </select>
                </div>
                {/* appetizer checkbox */}
                <div>
                    <label>Appetizer:</label><br/>
                    <input type="checkbox" name="appetizer" value="rawFish" onChange={ this.updateCheckbox } checked={ this.state.appetizer.includes('rawFish') }/> Raw Fishes

                    <input type="checkbox" name="appetizer" value="salad" onChange={ this.updateCheckbox } checked={ this.state.appetizer.includes('salad') }/> Salad

                    <input type="checkbox" name="appetizer" value="friedCuttlefish" onChange={ this.updateCheckbox } checked={ this.state.appetizer.includes('friedCuttlefish') }/> Fried Cuttlefish 

                    <input type="checkbox" name="appetizer" value="peanuts" onChange={ this.updateCheckbox } checked={ this.state.appetizer.includes('peanuts') }/> Peanuts
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </React.Fragment>
        )
    }
}
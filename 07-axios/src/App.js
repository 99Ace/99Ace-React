import React from 'react'
// import axios
import axios from 'axios'

class App extends React.Component {
    state = {
        "color":"",
        "all_colors":[],
        'loaded':false
    }
    // 1. use componentDidMount to load in the data
    async componentDidMount(){
        // 1.1 get axios data
        let response = await axios.get('json/colors.json')
        // 1.2 pass the data to state, use the 'loaded' to control the display of data later
        this.setState({
            "all_colors" : response.data,
            'loaded':true // set to true when data is ready
        })
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    renderColor() {
        let radios=[]
        for (let eachColor of this.state.all_colors) {
            let e = (<React.Fragment>
                <input name='color' type="radio" value={eachColor.value} checked={this.state.color===eachColor.value}  onChange={this.updateForm}/> 
                <span>{eachColor.display}</span>
            </React.Fragment>
            )
            radios.push(e)
        }
        return radios
    }
   
    render() {
        return (
            <React.Fragment>
                {
                    this.state.loaded ?
                        this.renderColor()
                        :
                        <h3>Loading</h3>
                }
                
            </React.Fragment>
        )

    }
}

export default App;

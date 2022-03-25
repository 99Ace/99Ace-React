import React from "react";
import axios from 'axios'
import Listing from "./components/Listing";


let url = "https://m9-99ace-api.herokuapp.com/m9User"

export default class PlayerList extends React.Component {

    state = {
        data: [],
        loaded: false,
        // new data
        newfname: "Ace",
        newlname: "Ang",
        newPostion: "Forward"
    }
    loadData = async () => {
        let response = await axios.get(url)
        this.setState({
            data: response.data,
            loaded: true
        })
    }
    componentDidMount = () => {
        this.loadData();
    }
    renderContent() {
        // if the data is loaded, then we render the data
        if (this.state.loaded === true) {
            return <React.Fragment>
                <Listing
                    data={this.state.data}
                />
            </React.Fragment>

        } 
        // else we show a waiting or loading message
        else {
            return <li>Loading in progress</li>
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2>Players List</h2>
                <button className="btn btn-dark">Create</button>
                <ul>
                    { this.renderContent() }
                </ul>
            </React.Fragment>
        );
    }
}
import React from "react";
import axios from "axios"

export default class Form extends React.Component {
    state = {
        "name"      : "",
        "color"     : "",
        "country"   : "",
        "fruits"    : [],
        "all_fruits": [],
        "all_countries": [],
        "all_colors": [],
        "loaded"    : false
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        // let response1 = await axios.get('./json/colors.json');
        // let request2 = axios.get('json/countries.json');
        // let request3 = axios.get('json/fruits.json');

        // let response1 = await request1;
        // let response2 = await request2;
        // let response3 = await request3;

        // let all_colors = response1.data;
        // let all_countries = response2.data;
        // let all_fruits = response3.data;
        // console.log(all_colors)

        // this.setState ({
        //     all_colors
        //     all_countries,
        //     all_fruits
        // })
    }

    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}
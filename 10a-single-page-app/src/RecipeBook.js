import React from "react";
import Listing from "./components/Listing";
import AddNew from "./components/AddNew";
import axios from 'axios'

export default class RecipeBook extends React.Component {
    state = {
        active: "listing",
        data: [
            {
                _id: 1,
                title: "Chicken Rice",
                ingredients: ["Chicken Broth", "Chicken", "Rice"]
            },
            {
                _id: 2,
                title: "Duck Rice",
                ingredients: ["Duck", "Rice"]
            }

        ],
        newTitle: "",
        newIngredients: "",

        // newFirstName:"",
        // newLastName:"",
        // newPosition:""

    };

    url = "https://m9-99ace-api.herokuapp.com/m9User"

    renderContent() {
        if (this.state.active === "listing") {
            return (
                <React.Fragment>
                    <Listing
                        data={this.state.data}
                    />
                </React.Fragment>
            );
        } else if (this.state.active === "add") {
            return (
                <React.Fragment>
                    <AddNew
                        newTitle={this.state.newTitle}
                        newIngredients={this.state.newIngredients}
                        updateState={this.updateState}
                        onAddNewData={this.onAddNewData}
                    />
                </React.Fragment>
            );
        }
    }
    setActive = (page) => {
        this.setState({
            'active': page
        })
    }
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onAddNewData = () => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    "_id": Math.floor(Math.random() * 10000),
                    "title": this.state.newTitle,
                    "ingredients": this.state.newIngredients.split(',')
                }
            ],
            "active": "listing"
        })
    }
    fetchData = async () => {
        let response = await axios.get(this.url);
        this.setState({
            data: response.data
        });
    };
    async componentDidMount() {
        this.fetchData();
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button
                                className="nav-link active"
                                aria-current="page"
                                onClick={() => {
                                    this.setActive("listing");
                                }}
                            >
                                Recipes
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => {
                                    this.setActive("add");
                                }}

                            >Add New</button>
                        </li>
                    </ul>
                </div>
                {/* {this.renderContent()} */}
            </React.Fragment>
        );
    }
}
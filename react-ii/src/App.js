// Use this App.js for context, 
// use App-ver1.js for the earlier react functions
import React from 'react';
import './App.css';
import ProductContext from "./pages/ProductContext.js"
import ProductListing from './pages/ProductListing';

class App extends React.Component {
    state = {
        products: [
            {
                id: 1,
                product_name: "ACME Anvils",
                cost: 9.99
            },
            {
                id: 2,
                product_name: "ACME Hammers",
                cost: 19.99
            },
            {
                id: 3,
                product_name: "ACME Screwdrivers",
                cost: 29.99
            }
        ]
    }

    render() {
        // inject the context object 
        const context = {
            products: () => {
                // pass the state.products
                return this.state.products
            }
        }

        return (
            <ProductContext.Provider value={context}>
                <React.Fragment>
                    
                    {/* nest other Component */}
                    <ProductListing />

                </React.Fragment>
            </ProductContext.Provider>
        )
    }
}

export default App;
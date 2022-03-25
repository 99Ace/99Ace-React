import React from "react";

export default function AddNew(props) {
    return (
      <React.Fragment>
        <h1>Add New Recipe</h1>
        <div>
          <div className="label">Title</div>
          <input
            type="text"
            className="form-control"
            name="newTitle"
            value={props.newTitle}
            onChange={props.updateState}
          />
        </div>
        <div>
          <div className="label">Ingredients</div>
          <input
            type="text"
            className="form-control"
            name="newIngredients"
            value={props.newIngredients}
            onChange={props.updateState}
          />
        </div>
        <button 
            className="btn btn-primary mt-3" 
            onClick={ 
                props.onAddNewData
            
           
        }>
          Add New
        </button>
      </React.Fragment>
    );
   }
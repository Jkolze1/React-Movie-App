import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <center>
    <form>
     <div className="input-group input-group-lg">
  
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
       
    
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
    </center>
  );
}

export default SearchForm;

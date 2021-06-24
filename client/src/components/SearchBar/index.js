import React from 'react'
import "./style.css";


function SearchBar(props) {
    return (
        <div className = "col-12 background-color">
            <nav id="friend-search" >
                <div className="form-inline d-flex container justify-content-center">
                <input className="form-control" type="search" placeholder="Search for a neighbor!" aria-label="Search" onChange = {props.handleChange}/>
                </div>
            </nav>
        </div>
    )
}

export default SearchBar
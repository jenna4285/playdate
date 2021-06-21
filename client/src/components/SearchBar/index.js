import React from 'react'
import "./style.css";


function SearchBar(props) {
    return (
        <div className = "col-12 background-color">
            <nav className="navbar navbar-light bg-light background-color">
                <div className="form-inline">
                <input className="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search" onChange = {props.handleChange}/>
                </div>
            </nav>
        </div>
    )
}

export default SearchBar
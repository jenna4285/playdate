import React, {useContext, useState, useEffect} from "react";
import Kidcard from "../Kidcard/Kidcard"
import UserContext from "../../utils/userContext";


function KidCardContainer(props) {

    return (
        <div className ="d-flex row">
        {/* This should be mapped over adding however many kids there are*/}
        {props.user.child ? (
        props.user.child.map((data) => (
          <Kidcard key={data._id} name={data.kidname} age={data.kidage} gender={data.gender}/>
        ))
      ) : (
        <p>""</p>
      )}
        </div>
    )
}


export default KidCardContainer

import React, {useContext, useState, useEffect} from "react";
import Kidcard from "../Kidcard/Kidcard"
import UserContext from "../../utils/userContext";


function KidCardContainer() {
    const {dbUser}=useContext(UserContext);

    return (
        <div className ="d-flex row">
        {/* This should be mapped over adding however many kids there are*/}
        {dbUser.child ? (
        dbUser.child.map((data) => (
          <Kidcard name={data.kidname} age={data.kidage} gender={data.gender}/>
        ))
      ) : (
        <p>""</p>
      )}
        </div>
    )
}


export default KidCardContainer

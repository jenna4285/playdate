import React from "react";
import Kidcard from "../Kidcard/Kidcard"


function KidCardContainer(props) {

    return (
        <div className="col-sm-12 col-md-6 col-lg-6">
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

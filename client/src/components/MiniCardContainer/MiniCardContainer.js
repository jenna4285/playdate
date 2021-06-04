import React from "react";
import Minikidcard from "../Minikidcard/Minikidcard";

function MiniCardContainer(props) {

  return (
    <div>
      {/* This should be mapped */}
      {props.kidList ? (
        props.kidList.map((data) => (
          <Minikidcard key={data._id} name={data.kidname} age={data.kidage} gender={data.gender} />
        ))
      ) : (
      null
      )}
    </div>
  );
}

export default MiniCardContainer;

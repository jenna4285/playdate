import React, {useContext, useState, useEffect} from "react";
import Minikidcard from "../Minikidcard/Minikidcard";
import UserContext from "../../utils/userContext";

function MiniCardContainer() {
    const {dbUser}=useContext(UserContext);

  return (
    <div>
      {/* This should be mapped */}
      {dbUser.child ? (
        dbUser.child.map((data) => (
          <Minikidcard key={data._id} name={data.kidname} age={data.kidage} />
        ))
      ) : (
        <p>
            ""</p>
      )}
    </div>
  );
}

export default MiniCardContainer;

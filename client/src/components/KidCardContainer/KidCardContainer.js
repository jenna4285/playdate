import React from "react";
import Kidcard from "../Kidcard/Kidcard"

function KidCardContainer() {
    return (
        <div className ="d-flex row">
                {/* This should be mapped over adding however many kids there are*/}
                <Kidcard />
                <Kidcard />
                <Kidcard />
        </div>
    )
}


export default KidCardContainer

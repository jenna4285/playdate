import React from "react";
import Kidcard from "../Kidcard/Kidcard"

function KidCardContainer() {
    return (
        <div className ="row">
            <div className="d-flex justify-content-center">
                {/* This should be mapped over adding however many kids there are*/}
                <Kidcard />
                <Kidcard />
                <Kidcard />
            </div>
        </div>
    )
}


export default KidCardContainer

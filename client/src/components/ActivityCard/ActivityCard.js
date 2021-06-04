import React from "react";

function ActivityCard(props) {

    let activity = props.activity;
    return (

        <div className="row">
            {props.activity.length ? (
                props.activity.map((data) => (
                    <div id="activity-container" className="activity-container  box p-d-flex p-mb-3 shadow">
                        <div className="row">
                            <div className="col-4">
                                <h5>{data.location}</h5>
                            </div>
                            <div className="col-4">
                                <h5>{activity.date}</h5>
                            </div>
                            <div className="col-4">
                                <h5>Host: {data.hostName}</h5>
                            </div>
                            <div className="row justify-content-center">
                                <p style={{ textAlign: "center" }}>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                null
            )}

        </div>
    )
}

export default ActivityCard;
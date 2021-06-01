import React, { useContext } from "react";
import UserContext from "../../utils/userContext"
import './CurrentProfileCard.css'



function CurrentProfileCard(props) {

  // const {dbUser}=useContext(UserContext);

  const dbUser = props.user;
  const child = props.user.child

  return (
    <div>
      <div className="card mb-3 dynamic-profile-card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.fullname}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.email}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.address}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">City</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.city}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">State</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.unitedState}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Zipcode</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.zip}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Bio</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.description}
            </div>
          </div>
          <hr />

          {dbUser.child ? (
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Child</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.child[0].kidname}
            </div>
          </div>
          ) : ("")}
          <hr />

        </div>
      </div>
    </div>
  )

}


export default CurrentProfileCard;
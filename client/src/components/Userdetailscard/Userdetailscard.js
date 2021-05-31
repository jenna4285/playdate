import React, {useContext} from "react";
import UserContext from "../../utils/userContext"

function Userdetailscard (){
  const {dbUser}=useContext(UserContext);
    return(
        <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
          {dbUser.fullname}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.email}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dbUser.address}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-12">
              <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Userdetailscard;
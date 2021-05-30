import React, {useContext} from "react";
import UserContext from "../../utils/userContext"

function Userdetailscard (){
  const {dbUser}=useContext(UserContext);
    return(
        <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Full Name</h6>
            </div>
            <div class="col-sm-9 text-secondary">
          {dbUser.first_name}<span> </span>{dbUser.last_name}
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {dbUser.email}
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Address</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {dbUser.address}
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-12">
              <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Userdetailscard;
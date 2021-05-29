import React from "react";
import Profileform from "../components/Profileform/Profileform";

function Profile(){
    return (
    <div>
         <button type="button" class="btn btn-primary btn-lg px-4 gap-3" id="editprofile">Edit Profile</button>
        <Profileform/>
    </div>
    )
}


export default Profile
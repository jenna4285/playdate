import React from "react";
import './style.css'


function HomeInfo(){

  return (
    <container>
    <div class="card-group">
    <div class="card">
      <img src="https://i.imgur.com/MmDUP78.jpg?2" class="card-img-top" alt="Person on device"/>
      <div class="card-body">
        <h5 class="card-title">Connect!</h5>
        <p class="card-text">Utilize PlayDate to connect with other families near you.</p>
      </div>
      {/* <div class="card-footer"></div> */}
    </div>
    <div class="card">
      <img src="https://i.imgur.com/c9iY1Yj.jpg?2" class="card-img-top" alt="Children Playing Tug of War"/>
      <div class="card-body">
        <h5 class="card-title">Play!</h5>
        <p class="card-text">See what your neighbors have planned and join the fun.</p>
      </div>
      {/* <div class="card-footer"></div> */}
    </div>
    <div class="card">
      <img src="https://i.imgur.com/hhloLYp.jpg" class="card-img-top" alt="Kids Playing Spike Ball"/>
      <div class="card-body">
        <h5 class="card-title">Invite!</h5>
        <p class="card-text">Add your upcoming activities and connect with your neighbors.</p>
      </div>
      {/* <div class="card-footer"></div> */}
    </div>
  </div>
  </container>      
    
  )
}

export default HomeInfo;

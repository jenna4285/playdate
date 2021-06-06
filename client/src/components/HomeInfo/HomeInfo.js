import React from "react";
import './style.css'


function HomeInfo(){

  return (
    <container>
    <div class="card-group">
    <div class="card">
      <img src="https://i.imgur.com/MmDUP78.jpg?2" class="card-img-top" alt="Person on device"/>
      <div class="card-body">
        <h5 class="card-title home-card">Connect!</h5>
        <p class="card-text home-card">Utilize PlayDate to connect with other families near you.</p>
      </div>
      {/* <div class="card-footer"></div> */}
    </div>
    <div class="card">
      <img src="https://i.imgur.com/c9iY1Yj.jpg?2" class="card-img-top" alt="Children Playing Tug of War"/>
      <div class="card-body">
        <h5 class="card-title home-card">Play!</h5>
        <p class="card-text home-card">See what your neighbors have planned and join the fun.</p>
      </div>
      {/* <div class="card-footer"></div> */}
    </div>
    <div class="card">
      <img src="https://i.imgur.com/hhloLYp.jpg" class="card-img-top" alt="Kids Playing Spike Ball"/>
      <div class="card-body">
        <h5 class="card-title home-card">Invite!</h5>
        <p class="card-text home-card">Add your upcoming activities and connect with your neighbors.</p>
      </div>
      {/* <div class="card-footer"></div> */}
    </div>
  </div>
  </container>      
    
  )
}

export default HomeInfo;

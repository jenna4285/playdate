import React from "react";

function Nav() {
  return (
    <header class="p-3 bg-dark text-white">
<div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="/dashboard" class="nav-link px-2 text-white">Dashboard</a></li>
          <li><a href="/profile" class="nav-link px-2 text-white">Profile</a></li>
          <li><a href="/editprofile" class="nav-link px-2 text-white">Edit Profile</a></li>
        </ul>

 

        <div class="text-end">
          <a class="btn btn-outline-light me-2" href="/login">Login</a>
          <a class="btn btn-warning" href="/signup">Sign-up</a>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Nav;

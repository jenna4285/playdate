import React, {useContext} from "react";
import UserContext from "../../utils/userContext";

function Messages() {
  const {dbUser}=useContext(UserContext)



  return (
    
<div id='messages' className='container'>

    <div> 
    <h1> Your Messages </h1>
    </div>


</div>

  )
}

export default Messages;
import React, {useContext} from "react";
import UserContext from "../../utils/userContext";
import './Messages.css'
function Messages() {
  const {dbUser}=useContext(UserContext)



  return (
    
<div id='messages' className='container'>

    <div id="your-messages"> 
    <h1 id="messages-header"> Your Messages </h1>
    </div>


</div>

  )
}

export default Messages;
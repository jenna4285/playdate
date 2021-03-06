import React, {useRef, useState, useEffect} from "react";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext'
import API from '../../utils/API'
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';


function Usercard (props){

  let {id}=useParams()
  const op = useRef(null);
  const {user, isAuthenticated} = useAuth0();

  const[message, setMessage]=useState({
    recipient:id,
    sender:props.user.email,
    content:"",
    timestamp:"",
  });

  useEffect(() => {
    setMessage({...message, timestamp:today, recipient:id })
  }, [isAuthenticated])

  let today = new Date().toLocaleDateString()

  function saveMessageHandler(e){
    op.current.hide(e)
    props.messageSuccess()
    API.addMessageByEmail({
      messages:
			{ 
        recipient:id,
				sender:props.user.fullname,
				content:message.content,
				timestamp:message.timestamp
			}
    })
}
  


  function handleInputChange(event) {
    const { name, value } = event.target
    setMessage({ ...message, [name]:value })
}

    return(
<div className="card">
<div className="card-body">
  <div className="d-flex flex-column align-items-center text-center">
    <img src={props.user.picture} alt="Admin" className="rounded" width="150"/>
    <div className="mt-3">
      <h4 className="textcolor">{props.user.fullname}</h4>
      <p className="text-secondary mb-1 textcolor">{props.user.username}</p>
      <p className="text-muted font-size-sm textcolor">{props.user.description}</p>
      { props.user.email !== user.email ?
      <>
      <Button id="add-activity-btn" type="button" label="Message User" onClick={(e) => op.current.toggle(e)} />   
      <OverlayPanel ref={op} showCloseIcon dismissable={false}>
        <InputText name="content" value={message.content} type="text" className="form-control" onChange={handleInputChange} placeholder="Enter Message Here!"/>
        <Button id="send-message" type="button" label="Send" onClick={saveMessageHandler} />   

      </OverlayPanel>
      </>
      : null}
       </div>
  </div>
</div>
</div>
    )
}


export default Usercard;
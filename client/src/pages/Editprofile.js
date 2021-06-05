import React, { useState, useEffect, useContext, useRef } from "react";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";
import UserContext from "../utils/userContext"
import { useAuth0 } from "@auth0/auth0-react";
import Profileform2 from "../components/Profileform/Profileform2";
import Kids2 from "../components/Kids/Kids2";
import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import MiniCardContainer from "../components/MiniCardContainer/MiniCardContainer"
import API from "../utils/API"




function Editprofile() {
    const toast = useRef(null);
    const { isAuthenticated, user } = useAuth0();
    const {dbUser}=useContext(UserContext);
    const [kidInfo, setKidInfo] = useState({
       
        kidname: "",
        kidage: '',
        gender: ""
       });
    const [kidList, setKidList] = useState([])
    const [profileInfo, setProfileInfo] = useState([])

    useEffect(() => {
        setKidList(dbUser.child)
    },[dbUser.child])

function displaySuccess(){
        toast.current.show({severity:'success', summary: 'Success!', detail:'Child Added', life: 3000});
        }
           
function handleBtnClick(event) {
    event.preventDefault();
    displaySuccess();
    if (kidInfo.kidname && kidInfo.kidage && kidInfo.gender) {
        API.addKidByEmail({
            //GRABBING INFO FROM STATE
            email: user.email,
            push: {child: {
                kidname: kidInfo.kidname,
                kidage: kidInfo.kidage,
                gender: kidInfo.gender
                },
            }})
           
            .then((res) => setKidList(res.data.child))
            // .then(() => showToast)
            // .then(() => window.location.href = "/editprofile")
            .then(setKidInfo({
                kidname: "",
                kidage: '',
                gender: ""
            }))
            .then(console.log(kidList))
            .catch(err => console.log(err));
    }
}


function handleInputChange(event) {
    const { name, value } = event.target
    setKidInfo({ ...kidInfo, [name]: value })
}

    return (
        <div className="container">
        <Toast ref={toast}/>

            <div className="row">
                <div className="col">
                    <Profileform2 setProfileInfo={setProfileInfo}/>
                </div>
                <div className="col">
                   <CurrentProfileCard user={profileInfo} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br />
                        <Kids2 handleChange={handleInputChange} handleBtnClick={handleBtnClick} kidInfo={kidInfo} displaySuccess={displaySuccess}/>
                </div>
                <div id="kid-column" className="col">
                    <div id="kid-card-container">
                        <MiniCardContainer kidList={kidList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Editprofile
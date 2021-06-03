import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/userContext"
import { useAuth0 } from "@auth0/auth0-react";
import Profileform2 from "../components/Profileform/Profileform2";
import Kids2 from "../components/Kids/Kids2";
import CurrentProfileCard from "../components/Currentprofilecard/CurrentProfileCard"
import Minikidcard from "../components/Minikidcard/Minikidcard"
import MiniCardContainer from "../components/MiniCardContainer/MiniCardContainer"
import API from "../utils/API"




function Editprofile() {

    const { isAuthenticated, user } = useAuth0();
    const {dbUser}=useContext(UserContext);
    const [kidInfo, setKidInfo] = useState({
       
        kidname: "",
        kidage: '',
        gender: ""
       });
    const [kidList, setKidList] = useState([])

    useEffect(() => {
        setKidList(dbUser.child)

    },[dbUser.child])

    //    const toast = useRef(null);

           
function handleBtnClick(event) {
    event.preventDefault();
 
    // const showToast = () => {
    //     toast.current.show({severity:'success', summary: 'Success!', detail:'Child Added', life: 3000});
    // }


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
            // .then(setKidList(res))
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
            <div className="row">
                <div className="col">
                    <Profileform2 />
                </div>
                <div className="col">
                   <CurrentProfileCard user={dbUser} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br />
                        <Kids2 handleChange={handleInputChange} handleBtnClick={handleBtnClick} kidInfo={kidInfo}/>
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
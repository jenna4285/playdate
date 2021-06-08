import React, { useState, useContext, useEffect } from "react";
import MapContainer from "../components/Map/map";
import Usercard from "../components/Usercard/Usercard";
import KidCardContainer from "../components/KidCardContainer/KidCardContainer";
import UserContext from "../utils/userContext";
import YourActivities from "../components/YourActivities/YourActivities";
import YourFriends from "../components/YourFriends/YourFriends";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import './Dashboard.css'
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
const api_key = 'vpd369jcmchr'
const chatClient = StreamChat.getInstance(api_key);


function Dashboard() {

    const { dbUser } = useContext(UserContext);
    const userLat = dbUser.lat
    const userLng = dbUser.lng

    const [uuid, setUuid] = useState({})
    const [activity, setActivity] = useState([])
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        getActivity();
        setUuid(null)
    }, [uuid]);



    const deleteActivity = (event) => {
        console.log(event.target.name)
        API.removeActivity(event.target.name)
            .then((res) => setUuid(res.id))
    }


    const getActivity = () => {
        API.getActivity()
            .then((res) => setActivity(res.data))
    };

    chatClient.connectUser(
        {
            id: 'Yousef',
            name: "Yousef",
            image: "https://s.gravatar.com/avatar/e46fc550ad57a71d16dd81b78ca27d0d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fyd.png",
        },
        chatClient.devToken('Yousef'),
    )

    const channel = chatClient.channel('messaging', 'delicate-hall-9', {
        // add as many custom fields as you'd like
        image: 'https://www.drupal.org/files/project-images/react.png',
        name: 'Neighborhood Chat',
        members: ['delicate-hall-9'],
    });



    // function handleBtnClick(event) {
    //     event.preventDefault();
    // }
    // bring in activities array & pass to map component and activities component

    return (
        <div>
            <h1 id="dashboard-header">Your Dashboard</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Usercard user={dbUser} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Chat client={chatClient} theme='messaging light'>
                            <Channel channel={channel}>
                                <Window>
                                    <ChannelHeader />
                                    <MessageList />
                                    <MessageInput />
                                </Window>
                                <Thread />
                            </Channel>
                        </Chat>
                    </div>

                </div>
                <div className="row no-gut">
                    <YourFriends user={dbUser} />
                    <div className='d-flex flex-wrap justify-content-center col-sm-12 col-md-6 col-lg-6'>
                        <KidCardContainer user={dbUser} />
                    </div>
                </div>
                <div className="d-flex row">

                    <YourActivities setActivity={setActivity} setUuid={setUuid} activity={activity} deleteActivity={deleteActivity} />

                </div>

                <MapContainer lat={userLat} lng={userLng} activity={activity} />

            </div>

        </div>
    )
}


export default Dashboard
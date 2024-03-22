import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'
// import './App.css'

function Room() {
    const { roomid } = useParams()

    const myMeeting = async (element) => {
        const appID = 1587545400;
        const serverSecret = "ecbb1873ed5593622ec00e3f2ba8b50b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), 'Rohan');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            }
        })
    }

    return (
        <div>
            <div className='meet' id="meeting" style={{ width: '90%', height: '90%', margin: 'auto' }} ref={myMeeting}></div>
        </div>
    )
}

export default Room
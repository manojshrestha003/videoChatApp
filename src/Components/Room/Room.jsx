import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { appId, serversecret } from '../Helper';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const initMeeting = async () => {
      if (meetingRef.current) {
        const appID = appId;
        const serverSecret = serversecret;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomId,
          Date.now().toString(),
          "Manoj Shrestha"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: meetingRef.current,
          sharedLinks:[
            {
              name: "Copy Link",
              url:`http://localhost:5173/Room/${roomId}`

            }
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
        });
      }
    };

    initMeeting();
  }, [roomId]); 

  return (
    <div>
      <div ref={meetingRef} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default Room;

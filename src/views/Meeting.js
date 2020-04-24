import React, { useState, useEffect } from "react";
import { domain, jitsiOptions } from "../config/jitsi";
import Loading from "../components/Loading";
function Meeting(props) {
  const [loading, setLoading] = useState(true);
  const roomName = props.match.params.meeting;
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "100%",
    height: "100%",
  };


  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) {
      try {
        const api = new window.JitsiMeetExternalAPI(domain, {
          ...jitsiOptions,
          jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJuYW1lIjoiYWRtaW4ifQ.35xNhJ2SdChN1J5-zT6Y8IRi4gwxvyYws97auBpxECg",
          roomName: roomName,
          parentNode: document.getElementById("jitsi-container"),
          userInfo:{
            email: 'admin@meet.techkunja.com.np',
            displayName: "Admin"
          }
        });
        // api.dispose();
        api.addEventListener("videoConferenceJoined", () => {
          console.log("Local User Joined");
          setLoading(false);
          api.executeCommand("displayName", "Samip");
        });
        api.addEventListener("videoConferenceLeft", ()=>{
          props.history.push("/");
        });
      } catch (error) {
        setLoading(false);
        console.error("Failed to load Jitsi API", error);
      }
    } else alert("Jitsi Meet API script not loaded");
  }, [props.history, roomName]);

  return (
    <div style={containerStyle}>
      {loading && <Loading full text={`Joining conference: ${roomName}`} />}
      <div id="jitsi-container" style={jitsiContainerStyle} />
    </div>
  );
}

export default Meeting;

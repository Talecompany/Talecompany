import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";

const Jitci = () => {
  const { iduser } = useParams();
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const jitsiContainerRef = useRef(null); // Ref for the Jitsi container

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    // Load the Jitsi Meet External API script
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = initJitsi;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (jitsiContainerRef.current) {
        jitsiContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const initJitsi = () => {
    if (window.JitsiMeetExternalAPI) {
      const domain = 'meet.jit.si';
      const options = {
        roomName: `JitsiMeetRoom${iduser}`, 
        width: '100%',
        height: 700, // Adjust the height as needed
        parentNode: jitsiContainerRef.current,
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'closedcaptions', 'fullscreen',
            'fodeviceselection', 'hangup', 'profile', 'info', 'chat', 'recording',
            'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
            'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
            'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
            'e2ee'
          ],
        },
        userInfo: {
          displayName: 'User' // Customize the display name
        }
      };
      new window.JitsiMeetExternalAPI(domain, options);
    }
  };

  return (
    <div className="App">
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF' }}>
        <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
          <Header />
          <div style={{ width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }}>
            <div ref={jitsiContainerRef} style={{ width: '100%', height: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jitci;

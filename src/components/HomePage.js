import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10); // Generate a random room ID
    setRoomId(newRoomId); // Set the room ID
    toast.success('Created New Room');
  };

  const handleJoinRoom = () => {
    if (roomId && username) {
      navigate(`/editor/${roomId}?username=${username}`);
    }
    else if(!roomId || !username){
        toast.error('Room ID & username is required');
    }
  };

  return (
    <div id="body">
      <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-sync_1.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">CODE MERGE- Real Time Collabaration</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Room Id"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}  
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}  
                        value={username}
                    />
                    <button className="btn joinBtn" onClick={handleJoinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        No invitation code? then create &nbsp;
                        <a 
                          onClick={handleCreateRoom}
                          className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                   Crafted with 💛&nbsp; by &nbsp;
                    <a href="https://github.com/Benarjishyam">Benarji Shyam</a>
                </h4>
            </footer>
        </div>
        </div>
  );
};

export default HomePage;

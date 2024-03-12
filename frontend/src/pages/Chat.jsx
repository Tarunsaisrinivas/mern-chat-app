import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [chats, setChats] = useState([]);

    const fetchChat = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/chat");
            setChats(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching chat:', error.message);
        }
    }

    useEffect(() => {
        fetchChat();
    }, []);

    return (
        <div>
            <h1>Chat</h1>
            <ul>
                {chats.map((chat, index) => (
                    <li key={index}>{chat.chatName}</li> 
                ))}
            </ul>
        </div>
    );
}

export default Chat;

import React from 'react'
import './ChatContainer.css'
import Chat from '../Chat/chat'
import SideBar from '../SideBar/sideBar'
export default function ChatContainer() {
    return (
        <div className="chat-container">
            <SideBar/>
            <Chat/>
        </div>
    )
}

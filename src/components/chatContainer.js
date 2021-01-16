import React from 'react'
import './ChatContainer.css'
import Chat from './chat'
import SideBar from './sideBar'
export default function ChatContainer() {
    return (
        <div className="chat-container">
            <SideBar/>
            <Chat/>
        </div>
    )
}

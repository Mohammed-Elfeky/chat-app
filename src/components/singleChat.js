import React from 'react'
import './SingleChat.css'
import avatar from '../1111.png'
import {selectChat} from '../action'
import { connect } from 'react-redux';
 function SingleChat({id,chatName,selectChat,lastMessage,img}) {

     const handleSingleChatClick=()=>{
         selectChat(id,chatName)  
     }

    return (
        <div className="single-chat" onClick={handleSingleChatClick}>

            <a href=""><img src={img} alt=""/></a>

            <div className="single-chat-info">
                <p>{chatName}</p>
                <h5>{lastMessage}</h5>
            </div>

        </div>
    )
}
export default connect(null,{selectChat})(SingleChat) 

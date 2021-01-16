import React from 'react'
import './Message.css'
import {connect} from 'react-redux'
function Message({id,data,user}) {
    return (
        <div className={user.id === data.senderId ? 'sender-message':'message'}>
            <span><img src={data.senderPhoto} alt=""/></span>
            <div className="message-info">{data.content}</div>
            {/* <small>{DateTime.parse(data.timestamp.toDate().toString())}</small> */}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{user:state.main.user}
}
export default connect(mapStateToProps)(Message)

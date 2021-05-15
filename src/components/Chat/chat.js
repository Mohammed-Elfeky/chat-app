import React,{useState,useEffect} from 'react'
import './Chat.css'
import Message from '../Message/message'
import { connect } from 'react-redux';
import {db} from '../../firebase/firebase'
import firebase from 'firebase'

function Chat({chatName,chatId,user}) {
    const [messageHolder,setMessageHolder]=useState('')
    const [messages,setMessages]=useState([])
    useEffect(() => {
        if(chatId){
          db.collection('chats')
          .doc(chatId)
          .collection('messages')
          .orderBy('timestamp','desc')
          .onSnapshot((snapshot)=>{
              setMessages(

                  snapshot.docs.map(doc=>{
                      return{
                            id:doc.id,
                            data:doc.data()
                            }
                  })
              )
          })
        }
        
    }, [chatId])

    useEffect(()=>{
        if(messages.length !==0){
            let last =messages[0].data.content
            let img=messages[0].data.senderPhoto
            db.collection('chats')
            .doc(chatId)
            .update({
            theLastMessage:last,
            img
            })
        }
    },[messages])

    

    const handleSubmit=(e)=>{

        e.preventDefault();

        if(messageHolder.length > 0){
          db.collection('chats')
          .doc(chatId)
          .collection('messages')
          .add({
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              content:messageHolder,
              senderId:user.id,
              senderPhoto:user.photo,
              senderEmail:user.email,
              senderName:user.id
          })
        }
        
        setMessageHolder('')

    }


    return (
        <div className="chat">

            <div className="chat-top-bar">
                <span>{chatName}</span>
            </div>

            <div className="chat-middle-part">
                {
                    messages.map(message=>{
                        return <Message key={message.id} id={message.id} data={message.data}  />
                    })
                }
            </div>
            { chatName ?
            <div className="chat-bottom-part">
                <form onSubmit={handleSubmit}>
                    <input value={messageHolder} onChange={(e)=>setMessageHolder(e.target.value)} type="text"/>
                </form>
            </div>
            :
            ''
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
            chatName:state.main.chatName,
            chatId:state.main.chatId,
            user:state.main.user
          }
}
export default connect(mapStateToProps)(Chat) 

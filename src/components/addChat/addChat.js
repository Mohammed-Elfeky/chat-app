import React ,{useEffect, useState} from 'react'
import './addChat.css'
import {db} from '../../firebase/firebase'
function AddChat({open,setOpen}) {

    const [chatNameHolder,setChatNameHolder]=useState('')
    const [available,setAvailable]=useState(false)
    const [errorHolder,setErorrHolder]=useState('')
    

    const handleSubmit=(e)=>{
        e.preventDefault();
       if(available){
            db.collection('chats').add({
                chatName:chatNameHolder,
                theLastMessage:null,
                img:null
            })
            setChatNameHolder('')
            setOpen(false)
       }
    
    }

    
    
    useEffect(()=>{

        if(chatNameHolder === ''){
            setAvailable(false)
            setErorrHolder('this input can not be empty')
        }else{
            db.collection('chats')
            .get()
            .then(collection=>{
    
                let exists= collection.docs.some(ele=>{
                    return ele.data().chatName === chatNameHolder
                })
    
                if(exists){
                    setAvailable(false)
                    setErorrHolder('not avilable')
                }else{
                    setAvailable(true)
                    setErorrHolder('')
                }
    
            })
        }
    },[chatNameHolder])



    return (
        <div className={`add-chat ${ open === false ? 'remove' : '' }`}>
            <div className="input-box">
                <div className="close" onClick={()=>{setOpen(false)}}>
                  <i className="far fa-times-circle"></i>
                </div>
                <form onSubmit={handleSubmit}>
                    <input value={chatNameHolder} onChange={(e)=>{setChatNameHolder(e.target.value)}} placeholder="chat name" type="text"/>
                </form>
                <div className="validation-error">
                   {errorHolder}
                </div>
            </div>
        </div>
    )
}

export default AddChat

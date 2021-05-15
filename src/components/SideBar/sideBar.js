import React,{useEffect,useState} from 'react'
import './SideBar.css'
import { connect } from 'react-redux';
import SingleChat from '../SingleChat/singleChat'
import {db,auth} from '../../firebase/firebase'
import AddChat from '../addChat/addChat'
function SideBar({user}) {

    const [chats,setChats]=useState([])
    const [open,setOpen]=useState(false)
    const [searchHolder,setSearchHolder]=useState('')
    
    useEffect(()=>{

        db.collection('chats').onSnapshot((snapshot)=>{
            setChats(
                snapshot.docs.map(doc=>{
                    return {
                           id:doc.id,
                           chatName:doc.data().chatName,
                           last:doc.data().theLastMessage,
                           img:doc.data().img
                        }
                })
            )
        })

    },[])


    

    const handleLogout=()=>{
        auth.signOut()
    }
    return (
        <div className="side-bar">
            <AddChat setOpen={setOpen} open={open}/>
            <div className="top-bar">
                <img src={user.photo} alt="logOut" onClick={handleLogout}/>
                
                <input value={searchHolder} onChange={(e)=>{setSearchHolder(e.target.value)}} type="text"/>
                
                <span onClick={()=>setOpen(true)}><i className="fa fa-plus-square" aria-hidden="true"></i></span>
            </div>

            <div className="bottom-part">
                {
                    searchHolder === '' ?
                    chats.map(chat=>{
                        return <SingleChat key={chat.id} img={chat.img} user={user} id={chat.id} chatName={chat.chatName} lastMessage={chat.last} />
                    })
                    :
                    chats
                    .filter(ele=>{return ele.chatName.includes(searchHolder) })
                    .map(chat=>{
                        return <SingleChat key={chat.id} img={chat.img} user={user} id={chat.id} chatName={chat.chatName} lastMessage={chat.last} />
                    })
                }
            </div>

        </div>

        
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.main.user
    }
}
export default connect(mapStateToProps)(SideBar)

import { connect } from 'react-redux';
import { logIn,logOut } from './/redux/actions/action'
import { useEffect } from 'react'
import { auth , provider,db } from './firebase/firebase'
import ChatContainer from './components/ChatContainer/chatContainer'
import Login from './components/login/login'

function App({ logIn ,logOut,user }) {

  useEffect(()=>{

    auth.onAuthStateChanged(function(user) {
      if (user) {

        logIn({
          name:user.displayName,
          email:user.email,
          id:user.uid,
          photo:user.photoURL
        })

      }else{

        logOut()

      }
    });
  },[])

  

  
  
  return (
    <div className="App">
      {user ? <ChatContainer/>:<Login/> }
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{user:state.main.user}
}
export default connect(mapStateToProps,{ logIn,logOut })(App);

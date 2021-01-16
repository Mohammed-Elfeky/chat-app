import Dashboard from './dashboard'
import { connect } from 'react-redux';
import { logIn,logOut } from './action'
import { useEffect } from 'react'
import { auth , provider,db } from './firebase'
import ChatContainer from './components/chatContainer'
import Login from './components/login'

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

import React from 'react'
import { auth , provider} from '../../firebase/firebase'
import './login.css'
function Login() {

    const handleLogin=()=>{
        auth.signInWithPopup(provider).then(function(result) {
          console.log(result)
         
        }).catch(function(error) {
         console.log(error)
        });
      }

    return (
        <div className="login">
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Login

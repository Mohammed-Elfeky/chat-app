export const logIn=(user)=>{

    return (dispatch)=>{

        dispatch({
            type:'LOGIN',
            payload:user
        })

    }

}

export const logOut=()=>{

    return (dispatch)=>{

        dispatch({
            type:'LOGOUT'
        })

    }

}



export const selectChat=(id,name)=>{

    return (dispatch)=>{

        dispatch({
            type:'SELECT_CHAT',
            payload:{id,name}
        })

    }

}



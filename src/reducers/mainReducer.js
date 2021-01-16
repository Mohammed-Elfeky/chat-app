const initialState={
    user:null,
    chatId:null,
    chatName:null
}
export default (state = initialState, action )=>{
    switch(action.type){

        case 'LOGIN':
        return {
            ...state,
            user:action.payload
        }

        case 'LOGOUT':
        return {
            ...state,
            user:null
        }

        case 'SELECT_CHAT':
        return {
            ...state,
            chatId:action.payload.id,
            chatName:action.payload.name
        }

       


        

        default:
        return state
    }
    
}
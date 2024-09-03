import http from "../http-common";


const insertMessages = (user_id, room_id, message) => {
    console.log(`MessageService insertMessages user_id ${user_id}`)
    console.log(`MessageService insertMessages room_id ${room_id}`)
    return http.post(`/messages/postMessages`, {user_id, room_id,message});
}
 


// router.post("/getitems", displayItemController);
const displayMessages = (room_id) => {
    console.log(`MessageService displayMessages room_id ${room_id}`)
    // return http.get(`/messages/displayMessages`, {room_id});
    return http.get(`/messages/displayMessages?room_id=${room_id}`);
}

 
const MessageService = {
    insertMessages,displayMessages
}

export default MessageService;
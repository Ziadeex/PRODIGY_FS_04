import http from "../http-common";

const displayRoom = () => {
    return http.get(`/rooms/getrooms`);
}


const RoomService = {
    displayRoom
}

export default RoomService;
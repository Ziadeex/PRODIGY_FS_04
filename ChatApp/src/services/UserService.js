import http from "../http-common";
import { getToken } from "../UTILS/localStorageUtils";
const authenticate = (user) => 
{
    return http.post(`/auth/authenticate`, user);
}


const register = (user) => {
    return http.post(`/auth/register`, user);
}

 
const getUserProfilePic = (userId) => {
    console.log(`getUserProfilePic UserService: ${userId}`);
    return http.get(`/auth/getuploadPic?userId=${userId}`);
};

const setUserProfilePic = (userId,profilepic) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('profilePic', profilepic);

    return http.put(`/auth/setuploadPic`, formData);
};

const getusername = (user_id) => {
    console.log(`getusername UserService: ${user_id}`);
    return http.get(`/auth/retrieveusernameController`,  { params: { user_id } });
   
};



const UserService = {
    authenticate,
    register,
    getUserProfilePic,
    setUserProfilePic,
    getusername
}

export default UserService;
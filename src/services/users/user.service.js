import axios from "api/Api";

export const getUser =  id => axios.get(`/api/users/${id}`)

        
export const modifyUser =  (id, user) => axios.patch(`/api/users/${id}`, user)

       
export const deleteUser =  id => axios.delete(`/api/users/${id}`)
        

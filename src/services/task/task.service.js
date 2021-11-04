import axios from "api/Api";
export const createTask =  task => axios.post("/api/tasks", task)
    
export const getListTask =  (query) => axios.get("/api/tasks", {
    params: query,
})
     
export const getTask =  id => axios.get(`/api/tasks/${id}`)
    

export const deleteTask = id => axios.delete(`/api/tasks/${id}`)
          
export const modifyTask = (task, id) =>  axios.patch(`/api/tasks/${id}`, task )


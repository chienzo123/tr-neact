import axios from "api/Api";
export const Login = loginData => axios.post("/auth/login", loginData)

export const Register =  user => axios.post("/auth/register", user)    


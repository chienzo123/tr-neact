import axios from "api/Api";

export const getCategories = () => axios.get('/api/categories')
        
    
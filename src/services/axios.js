import axios from "axios";
 const instanceProducts = axios.create({
    baseURL:"http://localhost:3000"
})
const instanceUsers = axios.create({
    baseURL:"https://reqres.in"
})
instanceProducts.interceptors.response.use((response)=>{
    return response.data;
},function(error){
    return Promise.reject(error);
})
instanceUsers.interceptors.response.use((response)=>{
    return response.data;
},function(error){
    return Promise.reject(error);
})
export {instanceUsers}
export default instanceProducts
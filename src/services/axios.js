import axios from "axios";
//Products
 const instanceProducts = axios.create({
    baseURL:"http://localhost:3000"
})

instanceProducts.interceptors.response.use((response)=>{
    return response.data;
},function(error){
    return Promise.reject(error);
})
//Users
const instanceUsers = axios.create({
    baseURL:"https://reqres.in"
})
instanceUsers.interceptors.response.use((response)=>{
    return response.data;
},function(error){
    return Promise.reject(error);
})
//Blogs
const instanceBlogs = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})
instanceBlogs.interceptors.response.use((response)=>{
    return response.data;
},function(error){
    return Promise.reject(error);
})
export {instanceUsers,instanceBlogs}
export default instanceProducts
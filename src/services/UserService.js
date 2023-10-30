import {instanceUsers} from "./axios"
const fetchUsers = (page)=>{
    return instanceUsers.get(`api/users?page=${page}`)
}
const postCreateUser = (data)=>{
    return instanceUsers.post(`api/users`,data)
}
const deleteUser = (id)=>{
    return instanceUsers.delete(`api/users/${id}`)
}
export {fetchUsers, postCreateUser,deleteUser}
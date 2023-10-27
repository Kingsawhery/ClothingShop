import {instanceUsers} from "./axios"
const fetchUsers = (page)=>{
    return instanceUsers.get(`api/users?page=${page}`)
}
export {fetchUsers}
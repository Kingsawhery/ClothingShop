import { instanceBlogs } from "./axios";

export function fetchBlogs(){
    return instanceBlogs.get("/posts");
}
export function fetchCreateBlog(data){
    return instanceBlogs.post("/posts",data);
}

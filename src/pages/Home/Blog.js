import { useEffect, useState,memo } from "react";
import { fetchBlogs} from "../../services/BlogService";
import { ListGroup } from "react-bootstrap";
import BlogBar from "../../views/components/component-child/BlogBar";
import Loading from "../Loading";
import { Modal,Button } from "bootstrap";
import ModalAddBlog from "../../views/components/component-child/ModalAddBlog";
 function Blog() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [newBlogs,setNewBlogs] = useState([]); 
  const [modalAdd,setModalAdd] = useState(false);
  useEffect(() => {
      getBlogs();
  }, [newBlogs]);
  const getBlogs = async () => {
    let res = await fetchBlogs();
    if (res || res.data) {
      setBlogs([...newBlogs,...res]);
      setLoading(false);
    }
  };
  console.log(modalAdd);
  return (
  <>
  {loading ? (
    <Loading></Loading>
  ) : (blogs && blogs.length>0 &&
    <ListGroup>
      {blogs.map((blog, index) => {
        return <BlogBar key={index} data={blog}></BlogBar>;
      })}
    </ListGroup>)}
    {!loading && <button className="btn btn-success position-fixed bottom-0 end-0 m-5" onClick={()=>{
        setModalAdd(true)
    }}>+ Add</button>}
    
    {modalAdd && (<ModalAddBlog modalAdd={modalAdd}  setModalAdd={setModalAdd} newBlogs={newBlogs} setNewBlogs={setNewBlogs}></ModalAddBlog>)}
    </>
  );
}
export default Blog
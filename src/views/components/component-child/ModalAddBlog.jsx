import { Modal,Form,Button } from "react-bootstrap"
import "../../../styles/scss/ModalAddBlog/ModalAddBlog.css"
import { useEffect,useState } from "react"
import { fetchCreateBlog } from "../../../services/BlogService"
export default function ModalAddBlog({modalAdd,setModalAdd,blogs,setBlogs}){
    console.log("ModalAddBlog");
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const handleSubmit = async()=>{
        if(!title || !content){
            alert("Empty content or title")
            return;
        }
        let data = {
            title:title,
            body:content,
            userId:1
        }
        const createBlog = async()=>{
            let res = await fetchCreateBlog(data);
            if(res || res.data){
                setBlogs([res,...blogs])
                console.log(res);
            }
        }
        createBlog();
        setModalAdd(false)
    }
   
    return (
        <Modal show={modalAdd} onHide={()=>setModalAdd(!modalAdd)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" onChange={(e)=>setContent(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
    </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setModalAdd(!modalAdd)}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

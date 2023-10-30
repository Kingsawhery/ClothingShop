import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { postCreateUser } from "../../../services/UserService";
import { toast } from "react-toastify";
function ModalAddUser({ users, setUsers, setShowModalAdd, showModalAdd,handleUpdateUser }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleSubmit = () => {
    if (!name || !job) {
      alert("Empty name or job");
      return;
    }
    let data = {
      name: name,
      job: job,
    };
    const createUsers = async () => {
      let res = await postCreateUser(data);
      if (res || res.data) {
        let newName = name.split(" ").join("").toLowerCase();
        console.log(newName);
handleUpdateUser([{first_name:name,id:res.id,email:`${newName}@reqres.in`},...users])
        toast.success("The user has been added");
      }
    };
    createUsers();
    setShowModalAdd(false);
  };

  return (
    <Modal show={true} onHide={() => setShowModalAdd(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add new User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Job</Form.Label>
            <Form.Control
              type="text"
              name="job"
              onChange={(e) => setJob(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModalAdd(false)}>
          Close
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Add{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalAddUser;

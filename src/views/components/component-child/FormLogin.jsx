
import "../../../styles/scss/Form/Form.css";
import { Modal,Button,Form } from "react-bootstrap";
export default function FormLogin({form, setForm,action}) {
  return (
    <Modal show={form} onHide={() => setForm(!Form)}>
      <Modal.Header closeButton>
        <Modal.Title>{action}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setForm(!Form)}>
          Close
        </Button>
        <Button variant="success">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

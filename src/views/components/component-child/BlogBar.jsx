import { ListGroup,Badge } from "react-bootstrap";
export default function BlogBar({data}) {
  return (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start m-3" style={{minHeight:"72px"}}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{data.title}</div>
            {data.body}
          </div>
          <Badge bg="primary" pill>
            {data.id}
          </Badge>
        </ListGroup.Item>
  );
}

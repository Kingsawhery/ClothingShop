import { ListGroup,Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { deleteBlog } from "../../../services/BlogService";
export default function BlogBar({data}) {
  return (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-center m-3" style={{minHeight:"72px"}}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{data.title}</div>
            {data.body}
          </div>
          <FontAwesomeIcon icon={faTrashCan} className="px-2" style={{color: "#000000",}} />
        </ListGroup.Item>
  );
}

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
export default function NoPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="not-found-page">
        <div className="not-found-page-icon">
          <FontAwesomeIcon icon={faQuestion} />
        </div>
      </div>
    </>
  );
}

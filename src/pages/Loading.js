import { Spinner } from "react-bootstrap";

function Loading(){
    return(
        <div className="loading d-flex justify-content-center align-items-center">
        <Spinner></Spinner>
        </div>
    )
}
export default Loading;
import ShowCard from "./Component-child/ShowCard";
import "../../../styles/scss/Content/Content.css";

function Content() {
  return (
    <>
      <div id="content">
        <div class="content-section container">
          <div class="title-index">
            <p>New Arrivals</p>
          </div>
          <ShowCard />
        </div>
      </div>
    </>
  );
}
export default Content;

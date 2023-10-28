import { useEffect, useState } from "react";
import { fetchUsers } from "../../../services/UserService";
import ReactPaginate from "react-paginate";
import { Spinner } from "react-bootstrap";
function ListUsers() {
  const [totalPage, setTotalPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      getUser(1);
      setLoading(false);
    }, 2000);
  }, []);
  const getUser = async (page) => {
    let res = await fetchUsers(page);
    if (res && res.data) {
      setUsers(res.data);
      setTotalPage(res.total_pages);
    }
  };
  function handlePageClick(e) {
    console.log(e);
    getUser(+e.selected + 1);
  }
  return (
    <>
      <div className="container mt-0">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3}>
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.first_name} {user.last_name}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}
export default ListUsers;

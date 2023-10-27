import { useEffect, useState } from "react";
import { fetchUsers } from "../../../services/UserService";
import ReactPaginate from "react-paginate";
function ListUsers() {
  const [totalPage, setTotalPage] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser(1);
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
    getUser(+e.selected + 1)
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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

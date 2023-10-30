import { useEffect, useState } from "react";
import { fetchUsers } from "../../../services/UserService";
import ReactPaginate from "react-paginate";
import { Spinner, Button } from "react-bootstrap";
import "../../../styles/scss/ListUser/ListUser.css";
import ModalAddUser from "../../../views/components/component-child/ModalAddUser";
import { deleteUser } from "../../../services/UserService";
import { toast } from "react-toastify";
function ListUsers() {
  const [totalPage, setTotalPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalAdd, setShowModalAdd] = useState(false);
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
  function handleUpdateUser(user){
setUsers(user)
  }
  function handleDeleteUser(user,name,id){
     if(window.confirm(`Banj có chắc chắn muốn xóa user ${name}`)){
const confirmDeleteUser = async ()=>{
  let res = await deleteUser(user.id)
  if(res && +res.statusCode === 204){
    console.log(users.id);
  let newUser = users.filter(item => item.id !== user.id)
  console.log(newUser);
  setUsers(newUser);
  toast.success(`Đã xóa thành công user ${name}`)
  }
  else{
    toast.error(`Hãy thử lại`)
  }
}
confirmDeleteUser();
     }
  }

  return (
    <>
      <div className="container mt-0 list-user">
        <div className="list-user-header">
          <h5 className="">List User:</h5>
          <Button
            className="btn btn-success"
            onClick={() => setShowModalAdd(true)}
          >
            Add User
          </Button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4}>
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((user, index) => {
                let name = user.last_name ? user.first_name + user.last_name : user.first_name
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>
                      {name}
                    </td>
                    <td>
                      <Button className="btn btn-danger" onClick={()=>handleDeleteUser(user,name)}>Delete</Button>
                      <Button className="btn btn-warning mx-2">Edit</Button>
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
      {showModalAdd && (
        <ModalAddUser
          users={users}
          setUsers={setUsers}
          setShowModalAdd={setShowModalAdd}
          handleUpdateUser = {handleUpdateUser}
          showModalAdd={showModalAdd}
        ></ModalAddUser>
      )}
    </>
  );
}
export default ListUsers;

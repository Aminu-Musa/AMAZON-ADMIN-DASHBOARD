import { useEffect, useState } from "react"
import PageHeader from "../utilities/PageHeader"
import { Link } from "react-router-dom";


function Users_page() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const getUsers = async ()=>{
      try {
        const resp = await fetch("http://159.65.21.42:9000/users")
        const data = await resp.json()
        setUsers(data)
      } catch (error) {
        alert('Sorry an error occured please check your internet conection')
      }
    }
    getUsers();
  }, []);

  return (
    <div className="pages">
      <PageHeader title='All users' />
      <div className="all-users-contanier ">
        {users.length == 0 ? <h1> No user account is available...</h1>:
        users.map((user)=>(
          <div className="card" key={user._id}>
          <div className="user-card">
            <div className="avater"><h2>A</h2></div>
            <div className="user-detail">
              <div className="detail-label">
                <p>name</p>
                <p>number</p>
                <p>email</p>
                <p>password</p>
              </div>

              <div>
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
              </div>

            </div>
          </div>

          <div className="data-action">
            <button className="edit"><Link to={`/user/${user._id}`} className="link">Edit</Link></button>
            <button className="delete">Delete</button>
          </div>
        </div>

        ))
        }



      </div>
    </div>
  )
}

export default Users_page
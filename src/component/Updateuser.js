import { useState } from "react"
import PageHeader from "../utilities/PageHeader"

function Updateuser() {
    const [username, setUsername] = useState("");                 
    const [useremail, setUserEmail] = useState("");       
    const [usertel, setUserTel] = useState("");       
    const [userpassword, setUserPassword] = useState("");         
    const [validation, setValidation] = useState(false)
  
      const formSubmission = async (e) => {
        e.preventDefault()
  
        if (username === "" || useremail === "" || userpassword === "" || usertel === "") {
          setValidation(true)
        } else {
          let userFormData = {
            name: username.toLowerCase(),
            phone: usertel,
            email: useremail.toLowerCase(),
            password: userpassword,
            // admin: 'code-coder'
          }
  
          const resp = await fetch("http://159.65.21.42:9000/users")
          const users = await resp.json()
  
          const multipleAccountVerification = users.find((user) => user.name === username)
          if (multipleAccountVerification !== undefined) {
            alert('User name already exit')
          }else{
            const createAccount = await fetch("http://159.65.21.42:9000/register", {
              method: "POST",
              headers:{"Content-Type": "application/json"},
              body: JSON.stringify(userFormData)
            })
  
            if (createAccount.ok) {
              alert('User Created Successfull')
              setUsername("")
              setUserEmail("")
              setUserPassword("")
              setUserTel("")
            }else{
              alert('Sorry a problem occured please try again!')
              console.log(createAccount);
            }
          }
        }
      }
  
  
  
  
  
    return (
      <div className="pages">
        <PageHeader title='Update user data' />
        <div className="new-user-container">
  
          <form action="">
            <div>
              <label htmlFor="fullname">Your name</label>
              <input type="text" name="" id="fname" placeholder="First and last name" 
              value={username} onChange={(e)=> setUsername(e.target.value)}/>
              {validation == true && username === ""? <span>* full name is required</span>: null}
  
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="" id="email" placeholder="email"  value={useremail} 
              onChange={(e)=> setUserEmail(e.target.value)}/>
              
              {validation == true && useremail === ""? <span>* email is required</span>: null}
            </div>
  
            <div>
              <label htmlFor="email">Mobile number</label>
              <input type="text" name="" id="email" placeholder="mobile number"  value={usertel} 
              onChange={(e)=> setUserTel(e.target.value)}/>
              
              {validation == true && usertel === ""? <span>* phone number is required</span>: null}
            </div>
  
            <div>
  
              <label htmlFor="password">Password</label>
              <input type="password" name="" id="password" placeholder="At least 6 characters"  
              value={userpassword} onChange={(e)=> setUserPassword(e.target.value)}/>
              {validation == true && userpassword === ""? <span>* password is required</span>: null}
            </div>
            <div>
  
              {/* <label htmlFor="confirm_pass">Re-enter password</label>
              <input type="text" name="" id="confirm_pass" /> */}
              
            </div>
  
            <button onClick={formSubmission}>Update Record</button>
          </form>
  
        </div>
      </div>
    )
  }
  

export default Updateuser
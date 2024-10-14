import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "./Log.css"
import axios from "axios"



    const Login = () => {

      const [name , setName] = useState("")
      const [password , setPassword] = useState("")
      const [error , setError] = useState("")

      const navigate = useNavigate();

        
      const handleSubmit = async (e) => {

                  e.preventDefault()


         //         // try{
              
         //const response = await axios.post("http://localhost:3000/Form" , name , password)
         
         // console.log(response.json())
         // console.log(response.status)


         // }catch(error){


         //      console.log("error is " , error)

         // }

       

         if (password.length < 8) {


            setError("Password must  at least 8 characters long")
           
             
         } else {

            setError("Successfully login")
            
            navigate("/Dashboard")

            localStorage.setItem("mern" , JSON.stringify(name , password))
            
         }

      }


         return(

            <>

                  <form class = "login-form" onSubmit={handleSubmit}>
            
              <div className="container">
                <div className="row">
          

            
             <input  type="email" name="name" id="name"
             placeholder="UserName"
             onChange={(e) => setName (e.target.value) }
             /> <br />


            
             <input  type="password" name="password" id="password"
             placeholder="password"
             onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

                  
                 {error && <h5 style={{color : "white" , position:"relative",left:"2rem",top:"19rem"}}>{error}</h5>}
             


            <button  className="btn btn-danger">Login</button>

           
            
               </div>
            
            </div>

            </form>
            </>

         )

           }
        
       
    

    export default Login;




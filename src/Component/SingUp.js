import { useState } from "react"
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase"
import Home from "./Home"
import Swal from 'sweetalert2'
import axios from "axios"

export default function SingUp(){

    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")
    const [confirmpassword,SetConfirmPassword] = useState("")


    const [user,setUser] = useState({})
    // onAuthStateChanged(auth,(currentUser) =>{
    //     setUser(currentUser)
    // })

    const handlesubmit = async() =>{
                var body={
                    email,password
                }
            try{
            const reponse = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQ41Z0k9Rbm84CFgvcZ73ay90sYutzKcA",body)
            console.log("postresponse",reponse)
                if(reponse){
                Swal.fire({
                    title: 'User Successfulluy Singup',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  window.location.href ="/login"
               }
            }
            catch(e){
                Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'This User is Already exist!',
                              })
            }

            //        try{
            //         const response = await createUserWithEmailAndPassword(auth,email,password)
            //         console.log("dataresponse",response)
            //    if(response){
            //     Swal.fire({
            //         title: 'User Successfulluy Singup',
            //         showClass: {
            //           popup: 'animate__animated animate__fadeInDown'
            //         },
            //         hideClass: {
            //           popup: 'animate__animated animate__fadeOutUp'
            //         }
            //       })
            //    }
            //        }
            //        catch(err){
            //         Swal.fire({
            //             icon: 'error',
            //             title: 'Oops...',
            //             text: 'This User is Already exist!',
            //           })
            //        }
            }
    


    return(<div className="">
        <Home/>
    <div className="mt-5">
<div className="row mt-5">
    <div className="col-md-4 offset-md-4">
        <h3 className="pb-3">SingUp Form</h3>
        {/* {user?.email} */}
        <div className="form-group">
            <label >Email address</label>
            <input type="email" value={email} className="form-control"  onChange={(event)=>SetEmail(event.target.value)} placeholder="Enter email"/>
        </div>
        <div className="form-group">
            <label >Password</label>
            <input type="password" value={password} className="form-control"  onChange={(event)=>SetPassword(event.target.value)}  placeholder="Password" />
        </div>
        {/* <div className="form-group">
            <label >Confirm Password</label>
            <input type="password" className="form-control"   onChange={(event)=>SetConfirmPassword(event.target.value)} placeholder="Password" />
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
    </div>
</div>
</div>
</div>)
}

import React,{useState} from "react"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase"
import { async } from "@firebase/util"
import Home from "./Home"
import axios from "axios"
import Swal from 'sweetalert2'


export default function Login(props){
        let history = useNavigate()
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState({
     email :"",
     age :"",
     
    })

    const handlesubmit = async() =>{
        try{
            if(email && password){
                const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQ41Z0k9Rbm84CFgvcZ73ay90sYutzKcA",{email,password})
                localStorage.setItem("userid",response.data.localId)
                if(response){
                Swal.fire(
                    'Good job!',
                    'You have successfully Login!',
                    'success'
                  )
                    history("/dashboard")
               }
            }
            else{
                alert("please type full data")
            }
        } catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Email not found!',
              })
        }
    }



    return(<div className="" >
        <Home/>
                <div className="mt-5">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <h3 className="pb-3">Login Form</h3>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" onChange={(event)=>SetEmail(event.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={(event)=>SetPassword(event.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button  className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                </div>
            </div>
            </div>
    </div>)
}
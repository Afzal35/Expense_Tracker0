
import React,{useState} from "react"
import {auth} from "../firebase"
import { async } from "@firebase/util"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Home(){



    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/home"><h4 className="text-success pr-5">Expense Tracker</h4></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">    
      <li className="nav-item ">
        <Link to="/singup" ><h4 className="pr-4 btn btn-outline-primary">SingUp</h4></Link>          
        </li>
        <li className="nav-item ">
        <Link to="/login"><h4 className="btn btn-outline-primary">Login</h4></Link>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
      </form> */}
    </div>
  </nav>)
}
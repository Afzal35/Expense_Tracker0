
import React,{useEffect, useState} from "react"
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";
import { Link ,uselo} from "react-router-dom";
import axios from "axios";
import { async } from "@firebase/util";
import Swal from 'sweetalert2'


export default function Dashboard(){
  let history = useNavigate()
    const [amount,SetAmont] = useState("")
    const [description,SetDescription] = useState("")
    const [category,SetCategory] = useState("")
    const [render,Setrender]=useState("")
    const [sub,SetSub] = useState("false")
    const [subid,SetSubId] = useState("")

    const [data,SetData] = useState({})



    
    const handlesubmit = async() =>{
      const id = localStorage.getItem("userid")
      console.log("userkiid",id)
       Setrender(render)
      SetAmont("")
      SetDescription("")
      SetCategory("")
      try{
        var body = {
          amount,description,category
        }
        var response = await axios.post(`https://expense-tracker-1d713-default-rtdb.firebaseio.com/${id}/expensedata.json`,body)
        
        console.log("response",response.status)
        if(response.status == 200){
          Swal.fire(
            'Good job!',
            'Data saved successfully',
            'success'
          )
          window.location.href ="/dashboard"
        }
      }
      catch(error){
        console.log("error",error)
      }
    }

    useEffect(()=>{
        getData()
    },[render])

    const getData = async() =>{
      var response = await axios.get(`https://expense-tracker-1d713-default-rtdb.firebaseio.com//${localStorage.getItem("userid")}/expensedata.json`)
        console.log(response.data)
        SetData(response.data)
    }


    const handleDelete = async(id) =>{
          try{
            var response = await axios.delete(`https://expense-tracker-1d713-default-rtdb.firebaseio.com//expensedata/${id}.json`)
            console.log("response",response.status)
            if(response.status == 200){
              alert("data Deleted successfully")
              window.location.href ="/dashboard"
            }
          }
          catch(error){
            console.log("error",error)
          }
         
    }

    const handleLogout = () =>{
      localStorage.clear()
      history("/login")
      Swal.fire(
        'Good job!',
        'You have successfully Logout!',
        'success'
      )
    }

    const handleEdit = (data,id) =>{
      SetAmont(data.amount)
      SetDescription(data.description)
      SetCategory(data.category)
      SetSub("true")
      SetSubId(id)
        // console.log(data.amount,id)
        // handleupdate(data,id)
    }


    const handleupdate = async() =>{
      console.log(subid)
      try{
        var body = {
          amount,description,category
        }
        var response = await axios.put(`https://expense-tracker-1d713-default-rtdb.firebaseio.com/expensedatasam@gmail.com/${subid}.json`,body)
        console.log("response",response.status)
        if(response.status == 200){
          alert("data Updated Successfully")
          window.location.href ="/dashboard"
        }
      }
      catch(error){
        console.log("error",error)
      }
    }


    return(<div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/home"><h3 className="text-success pr-5">Welcome To Dashboard...</h3></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item ml-5">
        <Link to="/singup" ><h4 className="pl-5">Please Add Expense Tracker</h4></Link>
        </li>
      </ul>
      <div className="form-inline my-2 my-lg-0">
        <div className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</div>
      </div>
    </div>
  </nav>
    <div className="row mt-5">
            <div className="offset-md-3 col-md-6">
  <div class="form-group">
    <label >Amount</label>
    <input type="text" Value={amount}  class="form-control" aria-describedby="emailHelp" onChange={(event)=>SetAmont(event.target.value)} placeholder="Enter Amount"/>
  </div>
  <div class="form-group">
    <label >Description</label>
    <input type="text" Value={description} onChange={(event)=>SetDescription(event.target.value)} class="form-control" placeholder="Description"/>
  </div>
  <div class="form-group">
  <label >Select Categories</label>
    <select onChange={(event)=>SetCategory(event.target.value)}  id="category"
          name="category"
          value={category} class="form-control" >
          <option>Select Category</option>
          <option value="Food">Food</option>
          <option value="Fuel">Fuel</option>
          <option value="Recharge">Recharge</option>
          <option value="Enjoyment">Enjoyment</option>
        </select>
  </div>
   {sub == "false" ?  <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button> :  <button type="submit" class="btn btn-primary" onClick={handleupdate}>Update</button>}
            </div>
    </div>

    <div className="table">
    <div className="row mt-5">
            <div className="offset-md-3 col-md-6">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">Amount</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Delele</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
   {data? Object.keys(data).map((id, index)=>{
     console.log(data[id])
              return(<tr>
                <th scope="row">{index+1}</th>
                <td>{data[id].amount}</td>
                <td>{data[id].description}</td>
                <td>{data[id].category}</td>
                <td><div  class="btn btn-success" onClick={()=>handleEdit(data[id],id)} >Update</div></td>
                <td><div  onClick={()=>handleDelete(id)} class="btn btn-danger">Delete</div></td>
              </tr>)
            }) : "" }
  </tbody>
</table>
    </div>
  </div>
  </div>
  </div>
  )
}
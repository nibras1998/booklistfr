import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(username == "" || password == ""){
            return alert("All columns are required")
        }
        axios.post("http://localhost:5000/login",{email:username,password:password})
        .then(res=>{
            console.log(res)
            if(res.data.error == "User Not found"){
                return alert("User not found")
            }
            if(res.data.error == "Invalid password"){
                return alert("Invalid password")
            }
            if(res.data.status == "ok"){
                navigate("/bookslist")
            }
        })

    }

    return (
        <div className='Logcontainer'>
            <div className='loginForm'>
                <div id="loginlogo"></div>
                <p id="loginheading">Member Login</p>
                <form>
                    <input type="text" id="usernameInput" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
                    <input type="password" id="usernameInput" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
                    <br></br>
                    <button id="loginbtn" onClick={handleSubmit}>Login</button>
                    <p style={{ "color": "red" }}>Forgot Password?</p>
                    <p style={{ "color": "blue", "fontSize": "small" }}><Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;
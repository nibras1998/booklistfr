import React from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Register = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpassword,setConfirmPassword] = useState("")
    const navigate=useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()
        if(username == "" || password == "" || confirmpassword == ""){
            return alert("All columns are required")
        }
        if(password!=confirmpassword){
            return alert("Passwords does not match")
        }
        axios.post("http://localhost:5000/signup",{email:username,password:password})
        .then(res=>{
            console.log(res)
            if(res.data.status == "User already exists"){
                return alert("User already exists")
            }
            if(res.data.status == "User Created"){
                return alert("User registered")
            }
        })

    }
    return (
        <div className='Regcontainer'>
            <div className='registerForm'>
                <div id="registerlogo"></div>
                <p id="registerheading">Register</p>
                <form>
                    <input type="text" placeholder='Username' id='usernameInput' onChange={e=>setUsername(e.target.value)}/>
                    <input type="password" id="usernameInput" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
                    <input type="password" id="usernameInput" placeholder='Confirm Password' onChange={e=>setConfirmPassword(e.target.value)}/>
                    <button id="loginbtn" onClick={handleRegister}>Register</button>
                    <p style={{ "color": "red" }}><Link to="/" id='memlog'>Member Login</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Register;
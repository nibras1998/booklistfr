import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './addbook.css'
import { useState, useEffect } from "react";
import axios from "axios";

const Addbook=()=>{
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [isbn,setIsbn] = useState("")
    const [author,setAuthor] = useState("")
    const [description,setDescription] = useState("")
    const [date,setDate] = useState("")
    const [publisher,setPublisher] = useState("")

    const addBook=(e)=>{
        e.preventDefault()
        if(author==""||isbn==""||title==""||description==""||date==""||publisher==""){
            return alert("All columns are required")
        }
        axios.post("http://localhost:5000/addbook",{
            title:title,
            isbn:isbn,
            author:author,
            description:description,
            date:date,
            publisher:publisher
        }).then(res=>{
            console.log(res)
            navigate("/bookslist")
        })
    }

    return(
        <div className="bookscontainer">
            <button id="showbook"><Link to="/bookslist" style={{"textDecoration":"none","color":"rgb(203,147,29)"}}>Show Book List</Link></button>
            <p id='heading'>Add Book</p>
            <p style={{"color":"white"}}>Create new book</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"20px"}} type="text" placeholder="Title of the Book" onChange={e=>setTitle(e.target.value)}/><br></br>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="ISBN" onChange={e=>setIsbn(e.target.value)}/><br></br>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Author" onChange={e=>setAuthor(e.target.value)}/><br></br>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Describe this book" onChange={e=>setDescription(e.target.value)}/><br></br>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Published date" onChange={e=>setDate(e.target.value)}/><br></br>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Publisher of this book" onChange={e=>setPublisher(e.target.value)}/><br></br>
            <button id="submitbook" onClick={addBook}>Submit</button>
        </div>
    )
}
export default Addbook;
import React from "react";
import './editbook.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Editbook=({books})=>{
    let bookedit = books
    let editingbook = localStorage.getItem("editbook")
    let filtered = bookedit.filter((item)=>{
        if(item.title == editingbook){
            return item
        }
    })
    const navigate = useNavigate()
    const [title,setTitle] = useState(filtered?filtered[0].title:"")
    const [isbn,setIsbn] = useState(filtered?filtered[0].isbn:"")
    const [author,setAuthor] = useState(filtered?filtered[0].author:"")
    const [description,setDescription] = useState(filtered?filtered[0].description:"")
    const [date,setDate] = useState(filtered?filtered[0].date:"")
    const [publisher,setPublisher] = useState(filtered?filtered[0].publisher:"")
    
    const submitEdit=(e)=>{
        e.preventDefault()
        if(author==""||isbn==""||title==""||description==""||date==""||publisher==""){
            return alert("All columns are required")
        }
        axios.put(`http://localhost:5000/editbook/${filtered[0]._id}`,{
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
            <p id='heading'>Edit Book</p>
            <p style={{"color":"white"}}>Update Book's Info</p>
            <p style={{"color":"white","marginBottom":"2px","marginLeft":"-380px","marginTop":"0px"}}>Title</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"20px"}} type="text" placeholder="Title of the Book" value={title} onChange={e=>setTitle(e.target.value)}/><br></br>
            <p style={{"color":"white","marginBottom":"2px","marginLeft":"-376px","marginTop":"0px"}}>ISBN</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="ISBN" value={isbn} onChange={e=>setIsbn(e.target.value)}/><br></br>
            <p style={{"color":"white","marginBottom":"2px","marginLeft":"-360px","marginTop":"5px"}}>Author</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)}/><br></br>
            <p style={{"color":"white","marginBottom":"2px","marginLeft":"-330px","marginTop":"5px"}}>Description</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Describe this book" value={description} onChange={e=>setDescription(e.target.value)}/><br></br>
            <p style={{"color":"white","marginBottom":"2px","marginLeft":"-305px","marginTop":"5px"}}>Published Date</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Published date" value={date} onChange={e=>setDate(e.target.value)}/><br></br>
            <p style={{"color":"white","marginBottom":"2px","marginLeft":"-342px","marginTop":"5px"}}>Publisher</p>
            <input style={{"width":"400px","height":"25px","marginBottom":"10px"}} type="text" placeholder="Publisher of this book" value={publisher} onChange={e=>setPublisher(e.target.value)}/><br></br>
            <button id="updatebook"><Link to="/bookslist" style={{"textDecoration":"none","color":"white"}} onClick={submitEdit}>Update Book</Link></button>
        </div>
    )
}
export default Editbook;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './bookslist.css'
import bookcover from './images/bookcover.jpg'


const Bookslist=()=>{
    const [books,setBooks] = useState(null)

    useEffect(()=>{
        axios.get("http://localhost:5000/getbooks")
        .then(res=>{
            console.log(res)
            setBooks(res.data)
        })
    },[])
    console.log(books)
    const navigate = useNavigate()
    const bookRecord=(title)=>{
        localStorage.setItem("book",title)
        navigate("/booksrecord")
    }
    const handleLogout=()=>{
        navigate("/")
    }
    return(
        <div className="bookscontainer">
            <p id='heading'>Books List</p>
            <br></br>
            <button id="logout" onClick={handleLogout}>Logout</button>
            <button id="addnew"><Link style={{"textDecoration":"none","color":"black"}} to='/addbook'>+ Add New Book</Link></button>
            
            <div className="items">
                {books&&books.map((book)=>{
                    return(
                        <div className="item" onClick={()=>bookRecord(book.title)}>
                    <img src={bookcover}/>
                    <p id="title">{book.title}</p>
                    <p id="author">{book.author}</p>
                    <p id="desc">{book.description}</p>
                </div>
                
                    )
                })}
                
                
            </div>
        </div>
    )
}
export default Bookslist;
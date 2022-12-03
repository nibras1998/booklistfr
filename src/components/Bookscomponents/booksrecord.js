import React from "react";
import { Link } from "react-router-dom";
import './booksrecord.css'
import axios from "axios";

const Booksrecord=({books})=>{
    let bookrecord = localStorage.getItem("book")
    let filtered = books.filter((item)=>{
        if(item.title == bookrecord){
            return item
        }
    })
    
    const editBook=()=>{
        localStorage.setItem("editbook",filtered[0].title)
    }

    const removeBook=()=>{
        axios.delete(`http://localhost:5000/deletebook/${filtered[0]._id}`)
        .then(res=>console.log(res))
    }

    return(
        <div className="bookscontainer">
            <button id="showbook"><Link to="/bookslist" style={{"textDecoration":"none","color":"rgb(203,147,29)"}}>Show Book List</Link></button>
            <p id='heading'>Book's Record</p>
            <p style={{"color":"white"}}>View Book's Info</p>
            <div style={{"marginBottom":"10px","marginTop":"40px"}}>
            {filtered&&filtered.map((book)=>{
                return(
                    <>
                         <div className="bookinfo">
                <p style={{"fontWeight":"bold"}}>1</p>
                <p>Title</p>
                <p>{book.title}</p>
            </div>
            <div className="bookinfo">
                <p style={{"fontWeight":"bold"}}>2</p>
                <p>Author</p>
                <p>{book.author}</p>
            </div>
            <div className="bookinfo">
                <p style={{"fontWeight":"bold"}}>3</p>
                <p>ISBN</p>
                <p>{book.isbn}</p>
            </div>
            <div className="bookinfo">
                <p style={{"fontWeight":"bold"}}>4</p>
                <p>Publisher</p>
                <p>{book.publisher}</p>
            </div>
            <div className="bookinfo">
                <p style={{"fontWeight":"bold"}}>5</p>
                <p>Published Date</p>
                <p>{book.date}</p>
            </div>
            <div className="bookinfo">
                <p style={{"fontWeight":"bold"}}>6</p>
                <p>Description</p>
                <p>{book.description}</p>
            </div>
                    </>
                )
            })}
           
            </div>
            <div id="btns" style={{"display":"flex"}}>
            <button id="delete" onClick={removeBook}><Link to="/bookslist" style={{"textDecoration":"none","color":"rgb(170,48,64)"}}>Delete Book</Link></button>
            <button id="edit" onClick={editBook}><Link to="/editbook" style={{"color":"rgb(31,128,141)","textDecoration":"none"}}>Edit Book</Link></button>
            </div>
           
        </div>
    )
}
export default Booksrecord;
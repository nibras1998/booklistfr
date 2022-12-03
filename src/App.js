import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Bookslist from './components/Bookscomponents/bookslist';
import Addbook from './components/Bookscomponents/addbook';
import Booksrecord from './components/Bookscomponents/booksrecord'
import Editbook from './components/Bookscomponents/editbook'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allbooks,setAllbooks] = useState(null)
  useEffect(()=>{
    axios.get("http://localhost:5000/getbooks").then(res=>{
      setAllbooks(res.data)
    })
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/bookslist' element={<Bookslist/>}/>
        <Route path='/addbook' element={<Addbook/>}/>
        <Route path='/booksrecord' element={<Booksrecord books={allbooks?allbooks:null}/>}/>
        <Route path='/editbook' element={<Editbook books={allbooks?allbooks:null}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

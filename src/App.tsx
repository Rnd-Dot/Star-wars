import './App.css';
import Home from './components/Home/Home';
import { useEffect, useState } from "react"
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Pagination, TextField } from '@mui/material';

const url = "https://swapi.dev/api/people/?"

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState("")

  useEffect(() => {
    axios.get(url + `search=${query}&page=${page}`)
      .then(data => {
        setCount(data.data.count)
        setUsers(data.data.results)
      })
  }, [page, query])

  const pagesCount = Math.ceil(count / 10)


  return (<div>
    <div className="App">
    <TextField  
        id="standard-basic" 
        variant="standard" 
        label="Search" 
        onChange={(e) => setQuery(e.target.value)} 
    />
    <Pagination count={pagesCount} page={page} onChange={(_, num) => setPage(num)}/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="/home" element={<Home users={users}/>}/>
    </Routes>
    </div>
  </div>
  );
}

export default App;

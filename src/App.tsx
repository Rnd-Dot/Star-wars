import './App.css';
import Home from './components/Home/Home';
import { useEffect, useState } from "react"
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Pagination, TextField } from '@mui/material';
import UserProfile from './components/UsersPage/UserProfile';

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
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home users={users}
          count={pagesCount}
          page={page}
          setPage={setPage}
          setQuery={setQuery} />} />
        <Route path="user/*" element={<UserProfile users={users} />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;

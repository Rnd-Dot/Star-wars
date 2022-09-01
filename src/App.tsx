import './App.css'
import Home from './components/Home/Home'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Route, Routes, Navigate } from 'react-router-dom'
import UserProfile from './components/UsersPage/UserProfile'
import { getUserItem, Users }  from "./types/types"
import NotFound from './components/Page-404/NotFound'
import Preloader from './common/Preloader/Preloader'
import ButtonHome from './components/Button/Button'

const url = "https://swapi.dev/api/people/?"

const App = () => {
  const [users, setUsers] = useState<Array<Users>>([])
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get<getUserItem>(url + `search=${query}&page=${page}`)
      .then(data => {
        setCount(data.data.count)
        setUsers(data.data.results)
        setIsLoading(false)
      })
  }, [page, query])

  const pagesCount = Math.ceil(count / 10)


  return (<div>
    { isLoading ? <Preloader />: (<div className="App">
      <ButtonHome/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home users={users}
          count={pagesCount}
          page={page}
          setPage={setPage}
          setQuery={setQuery} />} />
        <Route path="user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>)}
  </div>
  );
}

export default App;

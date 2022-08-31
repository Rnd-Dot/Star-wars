import { Pagination, TextField } from "@mui/material"
import User from "./User"

const Home = ({users, count, page, setPage, setQuery}) => {
    return <div>
        <TextField
        id="standard-basic"
        variant="standard"
        label="Search"
        onChange={(e) => setQuery(e.target.value)}
         />
        <Pagination count={count} page={page} onChange={(_, num) => setPage(num)} />
        {users.map(user => <User data={user} key={user.name} />)}
    </div>
}

export default Home
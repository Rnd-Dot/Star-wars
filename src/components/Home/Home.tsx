import { Pagination, TextField } from "@mui/material"
import { Users } from "../../types/types"
import User from "./User/User"
import "./Home.css"

type Props = {
    users: Array<Users>
    count: number
    page: number
    setPage: (num: number) => void
    setQuery: (str: string) => void
}

const Home:React.FC<Props> = ({users, count, page, setPage, setQuery}) => {
    return <div>
        <TextField
        id="standard-basic"
        variant="standard"
        label="Search"
        onChange={(e) => setQuery(e.target.value)}
         />
        <Pagination className="pagination" count={count} page={page} onChange={(_, num) => setPage(num)} />
        {users.map(user => <User data={user} key={user.name} />)}
    </div>
}

export default Home
import { Pagination, TextField } from "@mui/material"
import { Users } from "../../types/types"
import User from "./User/User"
import "./Home.css"
import { historyNames } from "../UsersPage/UserProfile"


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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
         />
        <Pagination className="pagination" count={count} page={page} onChange={(_, num) => setPage(num)} />
        {users.map(user => <User data={user} key={user.name} />)}
        <h1>History:</h1>
        <div className="history">
            {historyNames.map((name, index) => <div key={index}>{name}</div>)}
        </div>
    </div>
}

export default Home
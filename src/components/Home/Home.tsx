import { Pagination, TextField } from "@mui/material"
import { Users } from "../../types/types"
import User from "./User/User"
import "./Home.css"
import { useAddSelector } from "../../hooks/hooks"


type Props = {
    users: Array<Users>
    count: number
    page: number
    setPage: (num: number) => void
    setQuery: (str: string) => void
}


const Home: React.FC<Props> = ({ users, count, page, setPage, setQuery }) => {
    const items = useAddSelector(state => state.history.itemsName)

    return <div>
        <TextField
            id="standard-basic"
            variant="standard"
            label="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        />
        <Pagination className="pagination" count={count} page={page} onChange={(_, num) => setPage(num)} />
        {users.map(user => <User data={user} key={user.name} />)}
        <div className="history">
            {items.length < 1 ? <div></div> :
                <div>
                    <h1>History:</h1>
                    <div>
                        {
                            items.map((name: string, index: number) => <div key={index}>{name}</div>)
                        }
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Home
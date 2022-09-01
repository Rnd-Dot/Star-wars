import { NavLink } from "react-router-dom"
import { Users } from "../../../types/types"
import "./User.css"

type Props = {
    data: Users
}

const User:React.FC<Props> = ({data}) => {
    const id = data.url.split("/")
    return <div className="user">
        <NavLink to={"/user/" + id[5]}>
            {data.name}    
        </NavLink>
        <hr/>
    </div>
}

export default User
import { NavLink } from "react-router-dom"

const User = ({data}) => {
    const id = data.url.split("/")
    return <div>
        <NavLink to={"/user/" + id[5]}>
            {data.name}    
        </NavLink> 
    </div>
}

export default User
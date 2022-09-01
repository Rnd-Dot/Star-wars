import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"

const ButtonHome = () => {
    return (
    <NavLink to="/home">
        <Button variant="text">Home</Button>
    </NavLink>
    )
}

export default ButtonHome
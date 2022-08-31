import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UserProfile = () => {
    const params = useParams()
    const id = Object.values(params)
    const url = "https://swapi.dev/api/people/"
    const [userData, setUserData] = useState([])
    useEffect (() => {
        axios.get(url + id)
        .then(data => {
            setUserData(data.data)
        })
    },[])

    return <div>
        <div>{userData.name}</div>
        <div>{userData.birth_year}</div>
        <div>{userData.gender}</div>
        <div>{userData.height}</div>
        <div>{userData.mass}</div>
    </div>
}

export default UserProfile
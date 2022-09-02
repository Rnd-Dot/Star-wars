import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import Preloader from "../../common/Preloader/Preloader"
import { Users } from "../../types/types"
import "./UserProfile.css"


export let historyNames:Array<string> = []


const UserProfile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const isMounted = useRef(false)
    const [userData, setUserData] = useState<Users | null>(null)

    const params = useParams()
    const id = Object.values(params)

    const getHistory = (name: string) => {
        return historyNames.push(name)
    }

    const url = "https://swapi.dev/api/people/"

    useEffect(() => {
        axios.get<Users>(url + id)
            .then(data => {
                setUserData(data.data)
                setIsLoading(false)
                getHistory(data.data.name)
            })
    }, [])

    useEffect(() => {
        if(isMounted.current) {
            sessionStorage.setItem("history", JSON.stringify(historyNames))
        }
        isMounted.current = true
    }, [userData])


    return <div className="wrapper">
        {isLoading ?<Preloader /> : (<div className="cart_user">
            <div>
                <span>Name:</span>
                <span>{userData?.name}</span> 
            </div>
            <div>
                <span>Birth year:</span>
                <span>{userData?.birth_year}</span> 
            </div>
            <div>
                <span>Gender:</span>
                <span>{userData?.gender}</span> 
            </div>
            <div>
                <span>Height:</span>
                <span>{userData?.height}</span> 
            </div>
            <div>
                <span>Mass:</span>
                <span>{userData?.mass}</span> 
            </div>
        </div>)
        }
    </div>
}

export default UserProfile
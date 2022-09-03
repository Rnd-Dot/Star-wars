import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Preloader from "../../common/Preloader/Preloader"
import { useAddDispatch } from "../../hooks/hooks"
import { setItemName } from "../../redux/reducer"
import { Users } from "../../types/types"
import "./UserProfile.css"




const UserProfile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [userData, setUserData] = useState<Users | null>(null)
    const [name, setName] = useState <any>([])

    const dispatch = useAddDispatch()
    

    const params = useParams()
    const id = Object.values(params)

    

    const url = "https://swapi.dev/api/people/"

    useEffect(() => {
        axios.get<Users>(url + id)
            .then(data => {
                setUserData(data.data)
                setIsLoading(false)
                setName(data.data.name)
            })
    }, [])

    const getName = (name: string) => {
        if  (name.length > 0) {
            return dispatch(setItemName(name))
        }
        else return
    }

    useEffect(() => {
        getName(name)
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
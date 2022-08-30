import User from "./User"

const Home = ({users}) => {
    return <div>
        {users.map(user => <User data={user} key={user.name} />)}
    </div>
}

export default Home
import { useLogin } from "../hooks/useLogin"

const Profile = ()=>{

    const username = useLogin()

    return (
        <div className="">
            <h1>Profile page</h1>
            username : {username}
        </div>
    )
}
export default Profile
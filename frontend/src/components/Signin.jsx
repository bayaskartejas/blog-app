import { useRef } from "react"
import axios from "axios"
import { Main } from "./Main"

export function Signin({loggedIn, setLoggedIn, setUserToken}){
    const usernameRef = useRef()
    const passwordRef = useRef()
    return <div>
        {loggedIn ? <Main/> : <div className="container-signin">
            <div className="auth">
            <h1>Sign in</h1>
        <input type="text" placeholder="username" ref={usernameRef}/><br />
        <input type="password" placeholder="password" ref={passwordRef}/><br />
        <button onClick={()=>{
            axios.post("http://localhost:3000/signin",{
                username : usernameRef.current.value,
                password: passwordRef.current.value
            })
            .then((res)=>{
                setUserToken(res.data.token)
                setLoggedIn(true)
            })
            .catch((e)=>{   
                alert("wrong inputs")
            })
        }}>Sign in</button> 
            </div>
        </div>}
    </div>
}
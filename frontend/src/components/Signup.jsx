import { useRef } from "react"
import { Signin } from "./Signin"
import axios from "axios"

export function Signup({signedUp, setSignedUp}){
        const nameRef = useRef()
        const yearRef = useRef()
        const sectionRef = useRef()
        const rollNoRef = useRef()
        const branchRef = useRef()
        const emailRef = useRef()
        const usernameRef = useRef()
        const passwordRef = useRef()

    return <div>
        <h1>Sign Up</h1>
        Name: <input type="text" placeholder="name" ref={nameRef}/><br />
        Year: <input type="number" placeholder="year" ref={yearRef} min="1" max="4"/><br />
        Section: <input type="text" placeholder="section" ref={sectionRef}/><br />
        Roll No.<input type="number" placeholder="roll No" ref={rollNoRef}/><br />
        Branch: <input type="text" placeholder="branch" ref={branchRef}/><br />
        Email: <input type="text" placeholder="email" ref={emailRef}/><br />
        Username: <input type="text" placeholder="username" ref={usernameRef}/><br />
        Password<input type="text" placeholder="password" ref={passwordRef}/><br />
        <button onClick={()=>{
            axios.post("http://localhost:3000/signup", {
                name: nameRef.current.value,
                year: parseInt(yearRef.current.value),
                section: sectionRef.current.value,
                rollNo: parseInt(rollNoRef.current.value),
                branch: branchRef.current.value,
                email: emailRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            .then((res)=>{
                console.log(res.data);
                setSignedUp(true)
            })
        }}>Create Account</button><br /> 
        Already a user, <button onClick={()=>{
            setSignedUp(true)
        }}> Sign in</button>

    </div>
}
import { useEffect, useRef } from "react"
import { Signin } from "./Signin"
import axios from "axios"
import prmlogo2f from '../assets/prmlogo2f.png'

export function Signup({signedUp, setSignedUp}){
        const nameRef = useRef()
        const yearRef = useRef()
        const sectionRef = useRef()
        const rollNoRef = useRef()
        const branchRef = useRef()
        const emailRef = useRef()
        const usernameRef = useRef()
        const passwordRef = useRef()

        useEffect(()=>{
            document.body.className = "page";
            
        },[])

    return <div>
        <div className="logoContainer">
         <img id="logo" src={prmlogo2f}></img>            
        </div>

         <div className="container">
            <div className="auth">
        <h1>Sign Up</h1>
        <div id="input"> 
        <input type="text" placeholder="name" ref={nameRef} id="name"/><br />
        <input id="year" type="number" placeholder="year" ref={yearRef} min="1" max="4"/>
        <input id="section" type="text" placeholder="section" ref={sectionRef}/><br />
        <input id="rollNo" type="number" placeholder="roll No" ref={rollNoRef} min="1"/>
        <input id="branch" type="text" placeholder="branch" ref={branchRef}/><br />
        <input id="email" type="text" placeholder="email" ref={emailRef}/><br />
        <input id="username" type="text" placeholder="username" ref={usernameRef}/><br />
        <input id="password" type="text" placeholder="password" ref={passwordRef}/>          
        </div>
        <button style={{paddingBottom: "10px"}} onClick={()=>{
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
        <strong>Already a user, </strong><button onClick={()=>{
            setSignedUp(true)
        }}> Sign in</button>

    </div>
    </div>
    </div>
   

}
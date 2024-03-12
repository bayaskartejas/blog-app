import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export function Auth({children}){
    const [loggedIn, setLoggedIn] = useState(false)
    const [signedUp, setSignedUp] = useState(false)
    const [userToken, setUserToken] = useState("")
    
    return <div>
        {loggedIn ? <>{children}</> : 
        <div>
            {signedUp ? <Signin loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserToken={setUserToken}/> : <Signup signedUp={signedUp} setSignedUp={setSignedUp}/> }
        </div>}
    </div>
}
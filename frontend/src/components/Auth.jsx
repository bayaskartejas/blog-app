import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export function Auth(){
    const [loggedIn, setLoggedIn] = useState(false)
    const [signedUp, setSignedUp] = useState(false)
    
    return <div>
        {loggedIn ? <>{children}</> : 
        <div>
            {signedUp ? <Signin /> : <Signup /> }
        </div>}
    </div>
}
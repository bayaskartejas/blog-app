import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { createContext } from "react";

export const MyContext = createContext();
export function Auth({children}){

    const [loggedIn, setLoggedIn] = useState(false)
    const [signedUp, setSignedUp] = useState(false)
    const [userToken, setUserToken] = useState("")
    
    return <MyContext.Provider value={userToken}>
        {loggedIn ? <>{children}</> : 
        <div>
            {signedUp ? <Signin loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserToken={setUserToken}/> : <Signup signedUp={signedUp} setSignedUp={setSignedUp}/> }
        </div>}
    </MyContext.Provider>
}


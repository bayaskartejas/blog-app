import { Topbar } from "./Topbar"
import { Filter } from "./Filter"
import { Card } from "./Card"
import { Footer } from "./Footer"
import { NewPost } from "./NewPost"
import { useState } from "react"
import { useEffect } from "react"

export function Main(){
    const [posts, setPosts] = useState([])
    const [showNewComponent, setShowNewComponent] = useState(false)
    useEffect(()=>{
        document.body.className = "body";
        return () => {
            document.body.className = ''; // Reset body class on component unmount
          };
    },[])

    const handleClick = () => {
        setShowNewComponent(true)
    }
    return <div>
        {showNewComponent ? <NewPost /> : <div id="main">
                <div>
                    <Topbar /> 
                </div>  
                <div className="buttonDiv">
                        <button id="createPost" onClick={handleClick}>Create a Post 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" height={"20px"} width={"20px"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        </button>            
                </div> <br />
                <div id="bigDiv">
                    <Filter />
                    <div id="cardDiv">
                    <Card posts={posts} setPosts={setPosts}/>
                    </div>             
                </div>

                <Footer />
            </div>}
    </div>
}
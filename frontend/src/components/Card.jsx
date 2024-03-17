import axios from "axios";
import { MyContext } from "./Auth";
import { useContext, useEffect } from "react";

export function Card({posts, setPosts}){
    const token = useContext(MyContext)
    useEffect(()=>{
        axios.get("http://localhost:3000/posts", {
            headers: {
                Authorization: token,
            },
        })
        .then((res)=>{
            setPosts(res.data)
        })

    },[token])
    return <div>
        {
            posts.map((post)=>{
                <div style={{color: "white"}}>{post}</div>
            })
        }
    </div>
}
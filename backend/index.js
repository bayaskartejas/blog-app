const express = require("express")
const {User, inputSchema, secretKey, Post} = require("./db")
const  {authMiddleware}  = require("./authMiddleware")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.post("/signup", async (req,res)=>{
    let existCheck1 = await User.exists({
        username: req.body.username
    })
    let existCheck2 = await User.exists({
        year: req.body.year,
        section: req.body.section,
        rollNo: req.body.rollNo,
        branch: req.body.branch   
    })
    let existCheck3 = await User.exists({
        email: req.body.email
    })

    if(existCheck1 == null && existCheck2 == null && existCheck3 == null){
        if(inputSchema.safeParse(req.body).success){
            const newUser = new User({
                name: req.body.name,
                year: req.body.year,
                section: req.body.section,
                rollNo: req.body.rollNo,
                branch: req.body.branch,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                posts: []
            })
            newUser.save().then((data)=>{
                res.status(200).json({
                    data
                })
            })
        }
        else{
            res.status(404).json({
                msg: "input error",
                data: inputSchema.safeParse(req.body)
            })
        }
    }
    else{
        res.status(404).json({msg: "user already exists"})
    }
})

app.post("/signin", async(req,res)=>{
    let exist = await User.exists({
        username: req.body.username,
        password: req.body.password
    })
    if(exist != null){
        let token = jwt.sign({username: req.body.username}, secretKey)
        res.status(200).json({token})   
    }
    else{
        res.status(404).json({
            msg: "user does not exist"
        })
    }
})

app.get("/posts", authMiddleware, async (req, res)=>{
    const token = req.headers.authorization
    let decoded = jwt.decode(token)
    const TheUser = await User.find({username: decoded.username})
    let data = TheUser[0].posts
    let posts =[]
    for(let i=0; i<data.length; i++){
        let file = await Post.find({_id: data[i]})
        posts.push(file)
    }
    res.status(200).json(posts)
})

app.post("/posts", authMiddleware, async (req,res)=>{
    const decoded = jwt.decode(req.headers.authorization)
    await User.find({username: decoded.username})
    const newPost = new Post({post: req.body.post})
    let post = await newPost.save()
    await User.updateOne(
        {"username": decoded.username},
        {$push: {posts: post._id}}
    )
    
    res.status(200).json({
        msg: "posted!"
    })
})

app.listen("3000")
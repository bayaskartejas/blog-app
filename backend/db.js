const mongoose = require("mongoose")
const zod = require("zod")
const secretKey = "top-secret"
mongoose.connect("mongodb+srv://tejasbayaskar:Omboss8506%40@cluster0.fhjtmo2.mongodb.net/blog-app")

const inputSchema = zod.object({
    name: zod.string(),
    year: zod.number().positive().lte(4),
    section: zod.string().max(1),
    rollNo: zod.number().lte(99),
    branch: zod.string(),
    email: zod.string().email(),
    username: zod.string(),
    password: zod.string().min(6)

})

const  postSchema = mongoose.Schema({
    post: String
})

const userSchema = mongoose.Schema({
    name: String,
    year: Number,
    section: String,
    rollNo: Number,
    branch: String,
    email: String,
    username: String,
    password: String,
    posts: Array
})

const User = mongoose.model("User", userSchema)
const Post = mongoose.model("Post", postSchema)


module.exports = {
    User,
    inputSchema,
    secretKey,
    Post
}
import axios from "axios"
import { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MyContext } from "./Auth";

export function NewPost() {
    const token = useContext(MyContext)
    const [value, setValue] = useState('');
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ];

    const modules = {
        toolbar: toolbarOptions
    };

    // Function to sanitize HTML content
    const sanitizeHTML = (html) => {
        // Sanitization logic goes here (you can use libraries like DOMPurify)
        return html; // For simplicity, returning the HTML as is
    };

    const saveToMongoDB = () => {
        const sanitizedHTML = sanitizeHTML(value);
        axios.post("http://localhost:3000/posts",{
            post: sanitizedHTML
        },{
            headers: {
                Authorization: token,
            },
        })
        .then((res)=>{
        alert("Saved!");
        })
    };

    return (
        <div>
            <ReactQuill
                modules={modules}
                theme='snow'
                value={value}
                onChange={setValue}
            />
            <button onClick={saveToMongoDB}>Save</button>
        </div>
    );
}

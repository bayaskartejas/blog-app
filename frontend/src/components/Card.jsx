export function Card({title, uploadStatus, uploadDate, username, commentCount}){
    return <div>
        <div>{title}</div>
        <div>{uploadStatus}</div>
        <div>{uploadDate}</div>
        <div>{username}</div>
        <image></image>
        <div>{commentCount}</div>
        <svg></svg>
    </div>
}
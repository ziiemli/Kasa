import React from "react"

const Tags = ({tags}) => {
    return (
        <div>
            {tags && tags.map((tag, index) => (
                <span key={index}>{tag}</span>
            ))}
        </div>
    )
}

export default Tags

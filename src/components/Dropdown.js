import React from "react"

const Dropdown = ({content}) => {
    return (
        <div className="dropdown">
            {content && content.map((info, index) => (
                <div className="dropdown__content" key={index}>
                    {info}
                </div>
            ))}
        </div>
    )
}

export default Dropdown

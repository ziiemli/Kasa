import React from "react"
import {useState} from "react"

const Dropdown = ({content, title}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="dropdown">
            <button className="dropdown__categorie" onClick={(e) => setIsActive(!isActive)}>
                {title}
            </button>
            {isActive &&
                (Array.isArray(content) ? (
                    <ul>
                        {content.map((info, index) => (
                            <li className="dropdown__content" key={index}>
                                {info}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="dropdown__content">{content}</p>
                ))}
        </div>
    )
}

export default Dropdown

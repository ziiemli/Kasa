import React from "react"
import { Link } from 'react-router-dom'

const Card = ({location}) => {
    const urlName = location.title.split(' ').join('_')
    const url = `article/${urlName}`
    return (
        <article>
            <Link to={url} >
                <h2>{location.title}</h2>
                <img src={location.cover} alt="" />
            </Link>
        </article>
    )
}

export default Card
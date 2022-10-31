import React from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Article from '../pages/Article'

const Card = ({location}) => {
    const urlName = location.title.split(' ').join('_')
    const url = `article/${urlName}`
    return (
        <article>
            <Link to={url} >
                <h2>{location.title}</h2>
                <img src={location.cover} alt="" />
            </Link>
            <Routes>
                <Route path="/article" element={<Article location={location}/>}></Route>
            </Routes>
        </article>
    )
}

export default Card

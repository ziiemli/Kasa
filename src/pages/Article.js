import React from "react"
import axios from "axios"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

const Article = () => {
    //recover url
    const querystring = window.location.pathname.split("/article/").join("")
    //recover title name
    const articleName = querystring.split("_").join(" ")

    const [locationData, setLocationData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            //recover data
            const res = await axios.get("../logements.json")
            //find the right data
            const locationData = await res.data.find((el) => el.title === articleName)
            setLocationData(locationData)
        }
        getData()
        if (!locationData) {
            navigate("/error")
        }
    })
    return (
        <div>
            <h1>{locationData.title}</h1>
        </div>
    )
}

export default Article

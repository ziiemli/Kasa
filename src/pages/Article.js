import React from "react"
import axios from "axios"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Slideshow from "../components/Slideshow"

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
    const pictures = locationData.pictures
    const tags = locationData.tags
    const host = locationData.host
    // const length = pictures.length
    return (
        <div>
            <Header />
            <main>
                {/* IMAGES */}
                <section>
                    <div className="sliderContainer">
                        {/* <div className="leftArrow" onClick={prevSlide}></div> */}
                        {/* <div className="rightArrow" onClick={nextSlide}></div> */}
                        {pictures && pictures.map((picture, index) => <Slideshow key={index} picture={picture} />)}
                    </div>
                </section>
                {/* GLOBAL INFORMATIONS */}
                <section>
                    <div>
                        <h1>{locationData.title}</h1>
                        <p>{locationData.location}</p>
                        {tags && tags.map((tag, index) => <p>{tag}</p>)}
                    </div>
                    <div>
                        {/* STARS */}
                        <figure>
                            <figcaption>{host && host.name}</figcaption>
                            <img src={host && host.picture} alt="" />
                        </figure>
                    </div>
                </section>
                {/* DETAILS */}
                <section>
                    {/* DESCRIPTION */}
                    {/* EQUIPEMENTS */}
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Article

import React from "react"
import axios from "axios"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Slider from "../components/Slider"
import Dropdown from "../components/Dropdown"
import Stars from "../components/Stars"
import Tags from "../components/Tags"

const Article = () => {
    //recover url
    const querystring = window.location.pathname.split("/article/").join("")
    //recover id
    const articleId = querystring.split("_")[0]
    //recover name
    const articleNameRecover = querystring.split("_")
    articleNameRecover.shift()
    const articleName = articleNameRecover.join("_")

    //recover data
    const [locationData, setLocationData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            //recover data
            const res = await axios.get("../logements.json")
            //find the right data
            const locationData = await res.data.find((el) => el.id === articleId)
            setLocationData(locationData)
            //if data undefined
            if (!locationData) {
                navigate("/error")
            }

            //recover title in the title replacement of spaces by _ 
            const nameData = locationData.title.split(' ').join('_')
            //delete accent in the title
            const nameDataNoAccents = nameData && nameData.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            //informations of url of website
            const urlOfWebsite = articleId +  "_" + articleName
            //informations of url with data recover 
            const urlWithDataRecover = locationData.id + "_" + nameDataNoAccents
            
            //if informations don't match, return error page
            if (urlOfWebsite !== urlWithDataRecover) {
                navigate("/error")
            }
        }
        getData()

    })
   
    const tags = locationData.tags
    const host = locationData.host
    let lastName = host && host.name.split(" ").pop()
    let firstName = host && host.name.split(" ").shift()

    return (
        <div>
            <div className="content article">
                <Header />
                <main>
                    <Slider pictures={locationData.pictures} title={locationData.title}/>
                    <section className="article__informations">
                        <div>
                            <h1>{locationData.title}</h1>
                            <p className="article__location">{locationData.location}</p>
                            <Tags tags={tags} />
                        </div>
                        <div className="article__info2">
                            <Stars stars={locationData.rating} />
                            <figure>
                                <figcaption>
                                    <p>{firstName}</p>
                                    <p>{lastName}</p>   
                                </figcaption>
                                <img src={host && host.picture} alt={host && "Photo de " + host.name} />
                            </figure>
                        </div>
                    </section>
                    <section className="article__details">
                        <Dropdown classDP="dropdownArticle__button" classP="dropdownArticle__p" title="Description" content={locationData.description} />
                        <div className="article__details__space"></div>
                        <Dropdown classDP="dropdownArticle__button" classP="dropdownArticle__p" title="Équipements" content={locationData.equipments} />
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Article

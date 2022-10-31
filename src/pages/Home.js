import React from "react"
import Footer from "../components/Footer"
import Locations from "../components/Locations"
import Header from "../components/Header"
import home from "../assets/img/home.jpg"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="banner">
                <div className="home_background">
                    <h1>Chez vous, partout et ailleurs</h1>
                    <img src={home} alt="Paysage" />
                </div>
            </div>
            <Locations />
            <Footer />
        </div>
    )
}

export default Home

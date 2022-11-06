import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import about from "../assets/img/about.jpg"
import Dropdown from "../components/Dropdown"

const About = () => {
    const reliability =
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const security =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div>
            <Header />
            <div className="bannerAbout">
                <img src={about} alt="Paysage" />
            </div>
            <main className="dropdownAbout">
                <Dropdown title="Fiabilité" content={reliability} />
                <Dropdown title="Respect" content={respect} />
                <Dropdown title="Service" content={service} />
                <Dropdown title="Sécurity" content={security} />
            </main>
            <Footer />
        </div>
    )
}

export default About

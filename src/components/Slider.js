import React from "react"
import {useState} from "react"
import leftArrow from "../assets/logo/leftArrow.svg"
import rightArrow from "../assets/logo/rightArrow.svg"

const Slider = ({pictures}) => {
    const [current, setCurrent] = useState(0)
    const picturesLength = pictures && pictures.length

    const nextSlide = () => {
        setCurrent(current === picturesLength - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? picturesLength - 1 : current - 1)
    }
    if (!Array.isArray(pictures) || pictures.length <= 0) return null

    return (
        <section className="slider">
            <img className="leftArrow" src={leftArrow} alt="" onClick={prevSlide} />
            <img className="rightArrow" src={rightArrow} alt="" onClick={nextSlide} />
            {pictures && pictures.map((picture, index) => 
                <div className={index === current ? "slide_active" : "slide"} key={index}>
                   { index === current && <img src={picture} alt="" />} 
                </div>    
            )}
            
        </section>
    )
}

export default Slider

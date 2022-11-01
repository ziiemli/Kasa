import React from "react"

const Slideshow = ({picture}) => {
    return (
        <div className="sliderContainer__slide">
            <img src={picture} alt="" />
        </div>
    )
}

export default Slideshow

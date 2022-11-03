import React from "react"
import Star from "../assets/logo/Star.svg"
import Star_Gray from "../assets/logo/Star_Gray.svg"

const Stars = ({stars}) => {

    const starsNumber = stars && JSON.parse(stars)
    const starsString = "star ".repeat(5)
    let starsTable = starsString.split(" ")
    starsTable.pop()
    const emptyStarsNumber = 5 - starsNumber
    const fullStarsNumber = 5 - emptyStarsNumber
    const fullStars = starsTable.splice(0, fullStarsNumber)
    const emptyStars = starsTable.splice(0, emptyStarsNumber)

    return (
        <div>
            {fullStars.map((rate, index) => (
                <img src={Star} alt="" key={index}/>
            ))}
            {emptyStars.map((emptyStar, index) => (
                <img src={Star_Gray} alt="" key={index}/>
            ))}
        </div>
    )
}

export default Stars

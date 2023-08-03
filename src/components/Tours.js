import React from "react"
import Tour from "./Tour"

export default function Tours({tours}){
    return(
        <div className="tours-container">
            {
            tours.map(tour =>
                <Tour tours={tour} key={tour.id}/>
            )
            }
        </div>
    )
}
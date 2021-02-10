import React from "react"
import "../travelNote/travelNote.css"

export const FutureTripCard = ({ travelNote }) => { //travelNote is an object nested inside props 
    console.log(travelNote)
    return (
        <section className="aFutureTrip">
            <h3 className="travelNote__person">Name: { travelNote.users.firstName } { travelNote.users.lastName }</h3>
            <h4 className="travelNote__location">City: { travelNote.travelNotes.location }</h4>
        </section>
    )
}
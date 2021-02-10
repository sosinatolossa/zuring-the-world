import React from "react"
import "../travelNote/travelNote.css"

export const FutureTripCard = ({ aFutureTripNote }) => { //aFutureTripNote is an object nested inside props 
    return (
        <section className="aFutureTripNote">
            <h3 className="aFutureTripNote__person">Name: { aFutureTripNote.users.firstName } { aFutureTripNote.users.lastName }</h3>
            <h4 className="aFutureTripNote__location">City: { aFutureTripNote.travelNotes.location }</h4>
        </section>
    )
}
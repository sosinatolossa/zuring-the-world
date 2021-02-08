import React from "react"
import "../travelNote/travelNote.css"

export const FutureTripCard = ({ travelNote }) => { //travelNote is an object nested inside props 
    return (
        <section className="travelNote">
            <h3 className="travelNote__person">Name: { travelNote.users.firstName } { travelNote.users.lastName }</h3>
            <h4 className="travelNote__location">City: { travelNote.travelNotes.location }</h4>
            <div className="travelNote__date">Date: {new Date(travelNote.travelNotes.startDate).toLocaleDateString()} - {new Date(travelNote.travelNotes.endDate).toLocaleDateString()}</div>
            <div className="travelNote__planeTicketPrice">Plane Ticket Price: ${ travelNote.travelNotes.planeTicketPrice }</div>
            <div className="travelNote__costOnFood">Total money spent on food: ${ travelNote.travelNotes.costOfFood }</div>
            <div className="travelNote__costOnHotel">Total money spent on hotel: ${ travelNote.travelNotes.costOnHotel }</div>
            <div className="travelNote__notesDetails"> Notes: { travelNote.travelNotes.noteDetails }</div>
            <div className="travelNote__overallExperience">Overall experience: { travelNote.travelNotes.overallExperience }</div>
        </section>
    )
}
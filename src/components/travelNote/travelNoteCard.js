import React from "react"
import "./TravelNote.css"

export const TravelNoteCard = ({ aTravelNote }) => (
    <section className="aTravelNote">
        <h3 className="aTravelNote__location">Location: { aTravelNote.location }</h3>
        <div className="aTravelNote__date">Date: { aTravelNote.date }</div>
        <div className="aTravelNote__planeTicketPrice">Plane Ticket Price: ${ aTravelNote.planeTicketPrice }</div>
        <div className="aTravelNote__costOnFood">Total money spent on food: ${ aTravelNote.costOnFood }</div>
        <div className="aTravelNote__costOnHotel">Hotel cost: ${ aTravelNote.costOnHotel }</div>
        <div className="aTravelNote__notesDetails"> Notes: { aTravelNote.notesDetails }</div>
        <div className="aTravelNote__overallExperience">Overall experience: { aTravelNote.overallExperience }</div>
    </section>
)
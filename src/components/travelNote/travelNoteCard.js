import React from "react"
import "./TravelNote.css"

export const TravelNoteCard = ({ aTravelNote }) => (
    <section className="aTravelNote">
        <h3 className="aTravelNote__location">{ aTravelNote.location }</h3>
        <div className="aTravelNote__date">{ aTravelNote.date }</div>
        <div className="aTravelNote__planeTicketPrice">{ aTravelNote.planeTicketPrice }</div>
        <div className="aTravelNote__costOnFood">{ aTravelNote.costOnFood }</div>
        <div className="aTravelNote__costOnHotel">{ aTravelNote.costOnHotel }</div>
        <div className="aTravelNote__notesDetails"> { aTravelNote.notesDetails }</div>
        <div className="aTravelNote__overallExperience">{ aTravelNote.overallExperience }</div>
    </section>
)
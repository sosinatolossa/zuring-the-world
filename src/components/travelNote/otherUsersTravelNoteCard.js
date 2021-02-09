import React from "react"
import "./travelNote.css"
import { useHistory } from "react-router-dom"

export const OtherUsersTravelNoteCard = ({ aTravelNote }) => { //aTravelNote is an object nested inside props
    
    const history = useHistory() //we need the user history

    return (
        <section className="aTravelNote">
            {/* <h2 className="aTravelNote__name">Travelor: {aTravelNote.users.firstName} {aTravelNote.users.lastName}</h2> */}
            <h3 className="aTravelNote__location">City: { aTravelNote.location }</h3>
            <div className="aTravelNote__date">Date: {new Date(aTravelNote.startDate).toLocaleDateString()} - {new Date(aTravelNote.endDate).toLocaleDateString()}</div>
            <div className="aTravelNote__planeTicketPrice">Plane Ticket Price: ${ aTravelNote.planeTicketPrice }</div>
            <div className="aTravelNote__costOnFood">Total money spent on food: ${ aTravelNote.costOfFood }</div>
            <div className="aTravelNote__costOnHotel">Total money spent on hotel: ${ aTravelNote.costOnHotel }</div>
            <div className="aTravelNote__notesDetails"> Notes: { aTravelNote.noteDetails }</div>
            <div className="aTravelNote__overallExperience">Overall experience: { aTravelNote.overallExperience }</div>
        </section>
    )
}


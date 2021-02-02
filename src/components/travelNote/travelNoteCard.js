import React, {useContext } from "react"
import "./TravelNote.css"
import { TravelNoteContext } from "./TravelNoteProvider"
import { useHistory } from "react-router-dom"

export const TravelNoteCard = ({ aTravelNote }) => {
    const { deleteTravelNote } = useContext(TravelNoteContext)
    
    
    const history = useHistory()

    const handleDelete = () => {
        deleteTravelNote(aTravelNote.id)
        .then(() => {
            history.push("/travelNotes")
        })
    }

    return (
        <section className="aTravelNote">
            <h3 className="aTravelNote__location">City: { aTravelNote.location }</h3>
            <div className="aTravelNote__date">Date: {new Date(aTravelNote.startDate).toLocaleDateString()} - {new Date(aTravelNote.endDate).toLocaleDateString()}</div>
            <div className="aTravelNote__planeTicketPrice">Plane Ticket Price: ${ aTravelNote.planeTicketPrice }</div>
            <div className="aTravelNote__costOnFood">Total money spent on food: ${ aTravelNote.costOnFood }</div>
            <div className="aTravelNote__costOnHotel">Total money spent on hotel: ${ aTravelNote.costOnHotel }</div>
            <div className="aTravelNote__notesDetails"> Notes: { aTravelNote.noteDetails }</div>
            <div className="aTravelNote__overallExperience">Overall experience: { aTravelNote.overallExperience }</div>
            <button onClick={handleDelete}>Delete note</button>
        </section>
    )
}


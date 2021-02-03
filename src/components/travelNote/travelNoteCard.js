import React, {useContext } from "react"
import "./TravelNote.css"
import { TravelNoteContext } from "./TravelNoteProvider"
import { useHistory } from "react-router-dom"

export const TravelNoteCard = ({ aTravelNote }) => {
    //we're getting the function that performs a fetch operation with the DELETE method
    //to delete the specific travel note
    const { deleteTravelNote } = useContext(TravelNoteContext)
    
    
    const history = useHistory() //we need the user history

    //
    const handleDelete = () => {
        deleteTravelNote(aTravelNote.id) //delete the specific note
        .then(() => { //then
            history.push("/travelNotes") //once the delete button is clicked, redirect the user to their note list
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
            <button className="deleteBtn" onClick={handleDelete}>Delete note</button>
            <button className="editBtn" onClick={() => {
                history.push(`/travelNotes/edit/${aTravelNote.id}`)
            }}>Edit</button>
        </section>
    )
}


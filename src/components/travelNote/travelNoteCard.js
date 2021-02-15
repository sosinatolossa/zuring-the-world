import React, {useState, useContext} from "react"
import Modal from "react-modal"
import "./travelNote.css"
import { TravelNoteContext } from "./travelNoteProvider"
import { useHistory } from "react-router-dom"

Modal.setAppElement("#root")

export const TravelNoteCard = ({ aTravelNote }) => { //aTravelNote is an object nested inside props
    //we're getting the function that performs a fetch operation with the DELETE method
    //to delete the specific travel note
    const { deleteTravelNote } = useContext(TravelNoteContext)
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const history = useHistory() //we need the user history

    
    const handleDelete = () => {
        deleteTravelNote(aTravelNote.id) //delete the specific note
        .then(() => { //then
            history.push("/travelNotes") //once the delete button is clicked, redirect the user to their note list
        })
    }

    let startDate = new Date(aTravelNote.startDate)
    startDate.setDate(startDate.getDate() + 1)
    let endDate = new Date(aTravelNote.endDate)
    endDate.setDate(endDate.getDate() + 1)


    return (
        <section className="aTravelNote">
            <div>
                <img className="image" src={aTravelNote.imageURL}/>
            </div>
            <h3 className="aTravelNote__location">City: <em>{ aTravelNote.location }</em></h3>
            <div className="aTravelNote__date"><strong>Date:</strong> {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</div>
            <section className="separate">
                <div className="aTravelNote__planeTicketPrice"><strong>Gas/Plane Ticket Price:</strong> ${ aTravelNote.planeTicketPrice }</div>
                <div className="aTravelNote__costOnFood"><strong>Total money spent on food:</strong> ${ aTravelNote.costOfFood }</div>
                <div className="aTravelNote__costOnHotel"><strong>Total money spent on hotel:</strong> ${ aTravelNote.costOnHotel }</div>
                <div className="aTravelNote__overallExperience"><strong>Overall experience:</strong> { aTravelNote.overallExperience }</div>
                <button className="travelNotesPopupBtn" onClick={toggleModal}>Travel notes</button>
                    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" className="myModal">
                    <div className="aTravelNote__notesDetails">{ aTravelNote.noteDetails }</div>
                <button className="closeModalBtn" onClick={toggleModal}>Close</button>
                </Modal>
            </section >
            <button className="deleteBtn" onClick={handleDelete}>Delete note</button>
            <button className="editBtn" onClick={() => {
                history.push(`/travelNotes/edit/${aTravelNote.id}`)
            }}>Edit</button>
        </section>
    )
}


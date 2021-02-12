import React, { useState, useContext } from "react"
import Modal from "react-modal"
import { FutureTripContext } from "../futureTrip/FutureTripProvider"
import "./travelNote.css"

export const OtherUsersTravelNoteCard = ({ aTravelNote }) => { //aTravelNote is an object nested inside props

    const { addFutureTrip } = useContext(FutureTripContext)

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleSave = () => {
        const futureTripObj = {
            userId: parseInt(localStorage.getItem("ZuringTheWorld_user")),
            travelNoteId: aTravelNote.id
        }
        addFutureTrip(futureTripObj)
    }
    return (
        <section className="aTravelNote">
            <div className="aTravelNote__otherTraveler">
                <img className="image" src={aTravelNote.imageURL}/>
                <h2 className="aTravelNote__name">{aTravelNote.user.firstName} {aTravelNote.user.lastName}</h2>
            </div>
            <h3 className="aTravelNote__location">City: { aTravelNote.location }</h3>
            <div className="aTravelNote__date">Date: {new Date(aTravelNote.startDate).toLocaleDateString()} - {new Date(aTravelNote.endDate).toLocaleDateString()}</div>
            <div className="aTravelNote__planeTicketPrice">Plane Ticket Price: ${ aTravelNote.planeTicketPrice }</div>
            <div className="aTravelNote__costOnFood">Total money spent on food: ${ aTravelNote.costOfFood }</div>
            <div className="aTravelNote__costOnHotel">Total money spent on hotel: ${ aTravelNote.costOnHotel }</div>
            <div className="aTravelNote__overallExperience">Overall experience: { aTravelNote.overallExperience }</div>
            <button className="otherTravelNotesPopupBtn" onClick={toggleModal}>Travel notes</button>
                <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" className="myModal">
                <div className="aTravelNote__notesDetails">{ aTravelNote.noteDetails }</div>
            <button className="closeModalBtn" onClick={toggleModal}>Close</button>
            </Modal>
            <div></div>
            <button className="saveBtn" onClick={handleSave}>Save</button>
        </section>
    )
}


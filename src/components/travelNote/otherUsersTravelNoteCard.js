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
        <section className="othersTravelNote">
            <div className="aTravelNote__otherTraveler">
                <img className="image" src={aTravelNote.imageURL}/>
                <h4 className="aTravelNote__name"><strong>{aTravelNote.user.firstName} {aTravelNote.user.lastName}</strong></h4>
            </div>
            <h5 className="aTravelNote__location">City: <strong><em>{ aTravelNote.location }</em> </strong></h5>
            <div className="aTravelNote__date">Date: {new Date(aTravelNote.startDate).toLocaleDateString()} - {new Date(aTravelNote.endDate).toLocaleDateString()}</div>
            <section className="separate">
                <div className="aTravelNote__planeTicketPrice">Gas/Plane Ticket Price: ${ aTravelNote.planeTicketPrice }</div>
                <div className="aTravelNote__costOnFood">Total money spent on food: ${ aTravelNote.costOfFood }</div>
                <div className="aTravelNote__costOnHotel">Total money spent on hotel: ${ aTravelNote.costOnHotel }</div>
                <div className="aTravelNote__overallExperience">Overall experience: { aTravelNote.overallExperience }</div>
                <button className="otherTravelNotesPopupBtn" onClick={toggleModal}>Travel notes</button>
                    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" className="myModal">
                    <div className="aTravelNote__notesDetails">{ aTravelNote.noteDetails }</div>
                <button className="closeModalBtn" onClick={toggleModal}>Close</button>
                </Modal>
            </section>
            <button className="saveBtn" onClick={handleSave}>Save</button>
        </section>
    )
}


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
                <h3 className="aTravelNote__name"><strong>{aTravelNote.user.firstName} {aTravelNote.user.lastName}</strong></h3>
            </div>
            <h4 className="aTravelNote__location">City: <em>{ aTravelNote.location }</em></h4>
            <div className="aTravelNote__date"><strong>Date:</strong> {new Date(aTravelNote.startDate).toLocaleDateString()} - {new Date(aTravelNote.endDate).toLocaleDateString()}</div>
            <section className="separate">
                <div className="aTravelNote__planeTicketPrice"><strong>Gas/Plane Ticket Price:</strong> ${ aTravelNote.planeTicketPrice }</div>
                <div className="aTravelNote__costOnFood"><strong>Total money spent on food:</strong> ${ aTravelNote.costOfFood }</div>
                <div className="aTravelNote__costOnHotel"><strong>Total money spent on hotel:</strong> ${ aTravelNote.costOnHotel }</div>
                <div className="aTravelNote__overallExperience"><strong>Overall experience:</strong> { aTravelNote.overallExperience }</div>
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


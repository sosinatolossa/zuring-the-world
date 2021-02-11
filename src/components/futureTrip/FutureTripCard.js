import React, {useContext} from "react"
import "../travelNote/travelNote.css"
import { FutureTripContext } from "./FutureTripProvider"
import { useHistory } from "react-router-dom"

export const FutureTripCard = ({ aFutureTripNote }) => { //aFutureTripNote is an object nested inside props 

    //we're getting the function that performs a fetch operation with the DELETE method
    //to delete the specific travel note
    const { deleteFutureTrip } = useContext(FutureTripContext)
    console.log(aFutureTripNote, "aFutureTripNote")
    const history = useHistory() //we need the user history

    const handleDeleteTrip = () => {
        deleteFutureTrip(aFutureTripNote.id) //delete the specific note
        .then(() => { //then
            history.push("/travelNotes") //once the delete button is clicked, redirect the user to their note list
        })
    }

    return (
        <section className="aFutureTripNote">
            <h3 className="aFutureTripNote__person">Name: { aFutureTripNote.user.firstName } { aFutureTripNote.user.lastName }</h3>
            <h4 className="aFutureTripNote__location">City: { aFutureTripNote.travelNote.location }</h4>
            <button className="deleteBtn" onClick={console.log("hello"), handleDeleteTrip}>Delete note</button>
        </section>
    )
}
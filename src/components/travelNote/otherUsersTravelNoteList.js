import React, { useContext, useEffect } from "react"
// we're importing the context object we created in the provider component so that the Context hook can access the objects it exposes
import { TravelNoteContext } from "./travelNoteProvider"
import { OtherUsersTravelNoteCard } from "./otherUsersTravelNoteCard"
import { useHistory } from 'react-router-dom';
import "./travelNote.css"

export const OtherUsersTravelNoteList = () => {
    //This state changes when we invoke getTravelNotes below
    const { travelNotes, getTravelNotes } = useContext(TravelNoteContext)

    const history = useHistory()

    //sees who's logged in
    const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))
    

    //we're reaching out to the world to get travel notes which is our travelNotes api
    useEffect(() => {
        getTravelNotes()
    }, []) //first time this runs, our array should be empty so it won't be infinite loop and that's what we're doing here

    return ( //Link is a component
        <div className="otherPeoplesTrips">
            <section className="travelNote">

                {   

                    // we're using .filter method so we can filter through the notes with the user then
                    // we will use .map method to iterate our travelNotes array and generate HTML for each object
                    // for that we'll invoke our HTML converter TravelNoteCard component
                    travelNotes.filter( aTravelNote => aTravelNote.usersId !== currentUser).map(aTravelNote => {
                        return <OtherUsersTravelNoteCard key={aTravelNote.id}  //key and aTravelNote are named arguments and we're passing them to TravelNoteCard function
                                            aTravelNote={aTravelNote} />
                    })
                }
            </section>
        </div>
    )
}
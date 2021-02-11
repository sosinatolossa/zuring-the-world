import React, { useContext, useEffect, useState } from "react"
// we're importing the context object we created in the provider component so that the Context hook can access the objects it exposes
import { TravelNoteContext } from "./travelNoteProvider"
import { OtherUsersTravelNoteCard } from "./otherUsersTravelNoteCard"
import "./travelNote.css"

export const OtherUsersTravelNoteList = () => {
    //This state changes when we invoke getTravelNotes below
    const { travelNotes, getTravelNotes, searchTerms } = useContext(TravelNoteContext)

    // Since you are no longer ALWAYS displaying all of the notes
    const [ filteredNotes, setFiltered ] = useState([])

    //sees who's logged in
    const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))

    //we're reaching out to the world to get travel notes which is our travelNotes api
    useEffect(() => {
        getTravelNotes()
    }, []) //first time this runs, our array should be empty so it won't be infinite loop and that's what we're doing here


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
        // If the search field is not blank, display matching animals
        const subset = travelNotes.filter(note => note.location.includes(searchTerms))
        setFiltered(subset)
        } else {
        // If the search field is blank, display all animals
        setFiltered(travelNotes)
        }
    }, [searchTerms, travelNotes])

    

    // we're using .filter method so we can filter through the notes based on the current user
    const currentUsersNotes = travelNotes.filter( aTravelNote => aTravelNote.userId === currentUser )
    // and here, we're using .filter method so we can filter through the notes that don't belong to the current user
    const notesOfOtherUsers = filteredNotes.filter( aTravelNote => aTravelNote.userId !== currentUser )

    // we will start with notesOfOtherUsers array and want a subset of object using .filter()?
    const differentTripNotes = notesOfOtherUsers.filter(differentUserNoteObj => {
        //then inside the filter method, we will write .some() method on the currentUserNotes array
        //if the object's location of notesOfOtherUsers is same as currentUserNoteObj location
        const taco = currentUsersNotes.some(currentUserNoteObj => currentUserNoteObj.location === differentUserNoteObj.location)
        //we don't want those objects so we will negate taco and get the objects with different location
        if (!taco) {
            return differentUserNoteObj
        }
    })

    return ( //Link is a component
        <>
            <div className="otherPeoplesTrips">
                <section className="travelNote">

                    {   
                        // we will use .map method to iterate our travelNotes array and generate HTML for each object
                        // for that we'll invoke our HTML converter TravelNoteCard component
                        differentTripNotes.map(aTravelNote => {
                            return <OtherUsersTravelNoteCard key={aTravelNote.id}  //key and aTravelNote are named arguments and we're passing them to TravelNoteCard function
                                                aTravelNote={aTravelNote} />
                        })
                    }
                </section>
            </div>
        </>
    )
}
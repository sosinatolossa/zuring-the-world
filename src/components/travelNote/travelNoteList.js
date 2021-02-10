import React, { useContext, useEffect, useState } from "react"
// we're importing the context object we created in the provider component so that the Context hook can access the objects it exposes
import { TravelNoteContext } from "./travelNoteProvider"
import { TravelNoteCard } from "./travelNoteCard"
import { useHistory } from 'react-router-dom';
import "./travelNote.css"

export const TravelNoteList = () => {
    //This state changes when we invoke getTravelNotes below
    const { travelNotes, getTravelNotes, searchTerms } = useContext(TravelNoteContext)

    // Since you are no longer ALWAYS displaying all of the notes
    // const [ filteredNotes, setFiltered ] = useState([])

    const history = useHistory()

    //sees who's logged in
    const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))
    

    //we're reaching out to the world to get travel notes which is our travelNotes api
    useEffect(() => {
        getTravelNotes()
    }, []) //first time this runs, our array should be empty so it won't be infinite loop and that's what we're doing here


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    // useEffect(() => {
    //     if (searchTerms !== "") {
    //     // If the search field is not blank, display matching animals
    //     const subset = travelNotes.filter(note => note.location.includes(searchTerms))
    //     setFiltered(subset)
    //     } else {
    //     // If the search field is blank, display all animals
    //     console.log(travelNotes, "travelNotes")
    //     setFiltered(travelNotes)
    //     }
    // }, [searchTerms, travelNotes])

    return ( //Link is a component
        <div className="travelNotesContainer">
            
            <button className="addNewTravelNoteBtn" onClick={() => {history.push("/travelNotes/create")}}>
                Add new travel note
            </button>

            <section className="travelNotes">

                {   

                    // we're using .filter method so we can filter through the notes with the user then
                    // we will use .map method to iterate our travelNotes array and generate HTML for each object
                    // for that we'll invoke our HTML converter TravelNoteCard component
                    travelNotes.filter( aTravelNote => aTravelNote.usersId === currentUser).map(aTravelNote => {
                        return <TravelNoteCard key={aTravelNote.id}  //key and aTravelNote are named arguments and we're passing them to TravelNoteCard function
                                            aTravelNote={aTravelNote} />
                    })
                }
            </section>
        </div>
    )
}
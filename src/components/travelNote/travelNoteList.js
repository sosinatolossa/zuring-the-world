import React, { useContext, useEffect } from "react"
// we're importing the context object we created in the provider component so that the Context hook can access the objects it exposes
import { Link } from "react-router-dom";
import { TravelNoteContext } from "./TravelNoteProvider"
import { TravelNoteCard } from "./TravelNoteCard"
import { useHistory } from 'react-router-dom';
import "./TravelNote.css"


export const TravelNoteList = () => {
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
        <div>
            <button className="link--logout">
                    <Link to="/">Log out</Link> 
            </button>

            <h1 className="project-name">Zurīng the World</h1>
            
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
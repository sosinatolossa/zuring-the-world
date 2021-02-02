import React, { useContext, useEffect } from "react"
// we're importing the context object we created in the provider component so that the Context hook can access the objects it exposes
import { TravelNoteContext } from "./TravelNoteProvider"
import { TravelNoteCard } from "./TravelNoteCard"
import { useHistory, useParams } from 'react-router-dom';
import "./TravelNote.css"

export const TravelNoteList = () => {
    //This state changes when we invoke getTravelNotes below
    const { travelNotes, getTravelNotes } = useContext(TravelNoteContext)

    const history = useHistory()

    //we're reaching out to the world to get travel notes which is out travelNotes api
    useEffect(() => {
        getTravelNotes()
    }, []) //first time this runs, our array should be empty so it won't be infinite loop and that's what we're doing here

    return (
        <div>
        <button onClick={() => {history.push("/travelNotes/create")}}>
            Add new travel note
        </button>

            <section className="travelNotes">

                {
                    // we will use .map method to iterate our travelNotes array and generate HTML for each object
                    // for that we'll invoke our HTML converter TravelNoteCard component
                    travelNotes.map(aTravelNote => {

                        return <TravelNoteCard key={aTravelNote.id} 
                                            aTravelNote={aTravelNote} />
                    })
                }
            </section>
        </div>
    )
}

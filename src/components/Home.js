import React from "react"
import { Route } from "react-router-dom"
import { TravelNoteList } from "./travelNote/TravelNoteList"
import { NoteSearch } from "./futureTrip/NoteSearch"
import { FutureTripList } from "./futureTrip/FutureTripList"
import { Link } from "react-router-dom"
import "./travelNote/TravelNote.css"
import "./Home.css"

export const HomePage = () => {
    return (
        <>
        <section>
            <button className="link--logout">
                    <Link to="/">Log out</Link> 
            </button>
            <h1 className="project-name">Zurīng the World</h1>
            <Route className="homepage" path="/travelNotes">
                <TravelNoteList />
                <NoteSearch />
                <FutureTripList />
            </Route>
        </section>
        </>
    )
}
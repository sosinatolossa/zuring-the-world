import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
import { TravelNoteProvider } from "./travelNote/TravelNoteProvider"
import { TravelNoteList } from "./travelNote/TravelNoteList"
import { TravelNoteForm } from "./travelNote/TravelNoteForm"

export const ApplicationViews = () => {
    return (
        <>
        <TravelNoteProvider>
            <Route exact path="/travelNotes">
                <TravelNoteList />
            </Route>
            <Route exact path="/travelNotes/create">
                <TravelNoteForm />
            </Route>
        </TravelNoteProvider>
        </>
    )
}
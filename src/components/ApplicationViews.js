import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
import { TravelNoteProvider } from "./travelNote/TravelNoteProvider"
import { TravelNoteList } from "./travelNote/TravelNoteList"

export const ApplicationViews = () => {
    return (
        <>
        <TravelNoteProvider>
            <Route exact path="/travelNotes">
                <TravelNoteList />
            </Route>
        </TravelNoteProvider>
        </>
    )
}
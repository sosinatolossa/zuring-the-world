import React from "react"
import { Route } from "react-router-dom"
import { GetStartedPage } from "./GetStartedPage"

import { TravelNoteProvider } from "./travelNote/TravelNoteProvider"
import { TravelNoteList } from "./travelNote/TravelNoteList"
import { TravelNoteForm } from "./travelNote/TravelNoteForm"


export const ApplicationViews = () => {
    return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
                <GetStartedPage />
            </Route>
        <TravelNoteProvider>
            <Route exact path="/travelNotes">
                <TravelNoteList />
            </Route>
            <Route exact path="/travelNotes/create">
                <TravelNoteForm />
            </Route>
            <Route path="/travelNotes/edit/:travelNoteId(\d+)">
                <TravelNoteForm />
            </Route>
        </TravelNoteProvider>
        </>
    )
}
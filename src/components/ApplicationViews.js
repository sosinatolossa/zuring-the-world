import React from "react"
import { Route } from "react-router-dom"
import { GetStartedPage } from "./GetStartedPage"

import { TravelNoteProvider } from "./travelNote/TravelNoteProvider"
import { TravelNoteList } from "./travelNote/TravelNoteList"
import { TravelNoteForm } from "./travelNote/TravelNoteForm"

import { FutureTripProvider } from "./futureTrip/FutureTripProvider"
import { FutureTripList } from "./futureTrip/FutureTripList"
import { NoteSearch } from "./futureTrip/NoteSearch"


export const ApplicationViews = () => {
    return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
                <GetStartedPage />
            </Route>
        <FutureTripProvider>
            <TravelNoteProvider>
                <Route exact path="/travelNotes">
                    <TravelNoteList />
                    <NoteSearch />
                    <FutureTripList />
                </Route>
                <Route exact path="/travelNotes/create">
                    <TravelNoteForm />
                </Route>
                {/* hhb */}
                <Route path="/travelNotes/edit/:travelNoteId(\d+)">
                    <TravelNoteForm />
                </Route>
            </TravelNoteProvider>
        </FutureTripProvider>
        </>
    )
}
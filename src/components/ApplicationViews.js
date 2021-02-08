import React from "react"
import { Route } from "react-router-dom"
import { GetStartedPage } from "./GetStartedPage"
import { HomePage } from "./Home"

import { TravelNoteProvider } from "./travelNote/travelNoteProvider"
import { TravelNoteForm } from "./travelNote/travelNoteForm"

import { FutureTripProvider } from "./futureTrip/FutureTripProvider"


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
                    <HomePage />
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
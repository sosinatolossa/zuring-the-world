import React from "react"
import { Route } from "react-router-dom"
import { GetStartedPage } from "./GetStartedPage"
import { HomePage } from "./Home"

import { TravelNoteProvider } from "./travelNote/travelNoteProvider"
import { TravelNoteForm } from "./travelNote/travelNoteForm"

import { FutureTripProvider } from "./futureTrip/FutureTripProvider"
import { FutureTripList } from "./futureTrip/FutureTripList"


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
                    <section className="savedFutureTrips">
                        <FutureTripList />
                    </section>
                </Route>
                <Route exact path="/travelNotes/create">
                    <TravelNoteForm />
                </Route>
                
                <Route path="/travelNotes/edit/:travelNoteId(\d+)">
                    <TravelNoteForm />
                </Route>
            </TravelNoteProvider>
        </FutureTripProvider>
        </>
    )
}
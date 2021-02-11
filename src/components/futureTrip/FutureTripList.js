import React, { useContext, useEffect } from "react"
import { FutureTripContext } from "./FutureTripProvider"
import { FutureTripCard } from "./FutureTripCard"
import "../travelNote/travelNote.css"

export const FutureTripList = () => {
// This state changes when `getAnimals()` is invoked below
  const { trips, getFutureTrips } = useContext(FutureTripContext)

  //sees who's logged in
  const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))

  useEffect(() => {
    getFutureTrips()
  }, [])


  return (
      <div className="futureTrips">
          {
              trips.filter(aFutureTripNote => aFutureTripNote.userId === currentUser).map(aFutureTripNote => {
                  return <FutureTripCard key={aFutureTripNote.id} aFutureTripNote={aFutureTripNote} />
              })
          }
      </div>
  )
}
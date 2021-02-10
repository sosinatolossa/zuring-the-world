import React, { useContext, useEffect } from "react"
import { FutureTripContext } from "./FutureTripProvider"
import { FutureTripCard } from "./FutureTripCard"
import "../travelNote/travelNote.css"

export const FutureTripList = () => {
// This state changes when `getAnimals()` is invoked below
  const { trips, getTrips } = useContext(FutureTripContext)

  useEffect(() => {
    getTrips()
  }, [])

  return (
      <div className="futureTrips">
          {
              trips.map(aFutureTripNote => {
                  return <FutureTripCard key={aFutureTripNote.id} aFutureTripNote={aFutureTripNote} />
              })
          }
      </div>
  )
}
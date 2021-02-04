import React, { useContext, useEffect } from "react"
import { FutureTripContext } from "./FutureTripProvider"
import { TravelNoteCard } from "./travelNote/TravelNoteCard.js"
import "./travelNote/TravelNote.css"

export const FutureTripList = () => {
  // This state changes when `getTravelNotes()` is invoked below
  const { trips, getTrips } = useContext(FutureTripContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("FutureTripList: useEffect - getTrips")
    getTrips()

  }, [])


  return (
    <div className="trips">
      {console.log("FutureTripList: Render", travelNotes)}
      {
        trips.map(travelNote => {
          return <TravelNoteCard key={travelNote.id} 
                                travelNote={TravelNote} />
        })
      }
    </div>
  )
}
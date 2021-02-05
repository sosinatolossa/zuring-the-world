import React, { useContext, useEffect } from "react"
import { FutureTripContext } from "./FutureTripProvider"
import { FutureTripCard } from "./FutureTripCard"
import "../travelNote/TravelNote.css"

export const FutureTripList = () => {
  // This state changes when `getTravelNotes()` is invoked below
  const { trips, getTrips } = useContext(FutureTripContext)


  //sees who's logged in
  const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("FutureTripList: useEffect - getTrips")
    getTrips()

  }, [])


  return (
    <div className="trips">
      <h3>Future trips</h3>
      { 
        // we're using .filter method so we can filter through the notes that does not belong to the current user
        // we will use .map method to iterate our travelNotes array and generate HTML for each object
        // for that we'll invoke our HTML converter TravelNoteCard component
        trips.filter( travelNote => travelNote.userId !== currentUser).map(travelNote => {
          return <FutureTripCard key={travelNote.id} 
                                travelNote={travelNote} />
        })
      }
    </div>
  )
}
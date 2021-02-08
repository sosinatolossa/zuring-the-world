import React, { useContext, useEffect, useState } from "react"
import { FutureTripContext } from "./FutureTripProvider"
import { FutureTripCard } from "./FutureTripCard"
import "../travelNote/travelNote.css"

export const FutureTripList = () => {
  // This state changes when `getTravelNotes()` is invoked below
  const { trips, getTrips, searchTerms } = useContext(FutureTripContext)
  // const [travelNotes, setTravelNotes] = useState(TravelNoteContext)


  //sees who's logged in
  const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))


  // Since you are no longer ALWAYS displaying all of the notes
  const [ filteredNotes, setFiltered ] = useState([])

  //useEffect - reach out to the world for something
  useEffect(() => {
    getTrips()

  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = trips.filter(trip => trip.travelNotes.location.includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(trips)
    }
  }, [searchTerms, trips])


  return (
    <div className="trips">
      
      { 
        // we're using .filter method so we can filter through the notes that does not belong to the current user
        // we will use .map method to iterate our travelNotes array and generate HTML for each object
        // for that we'll invoke our HTML converter TravelNoteCard component
        filteredNotes.filter( travelNote => travelNote.userId !== currentUser).map(travelNote => {
          return <FutureTripCard key={travelNote.id} 
                                travelNote={travelNote} />
        })
      }
    </div>
  )
}
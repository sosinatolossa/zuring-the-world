import React, { useState, createContext } from "react"

//we're going to create travel context that other components can use for data
//it is empty here
export const FutureTripContext = createContext()

// will use the useState() hook to define a variable that holds the state of the component, and a function that updates it
export const FutureTripProvider = (props) => {
    const [trips, setTrips] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getTrips = () => { // creating a function that
        return fetch("http://localhost:8088/futureTrips?_expand=users&_expand=travelNotes") //fetches our Trips api
        .then(res => res.json()) //changes the data into json file
        .then(setTrips) //updates our state
    }

    const addTrip = tripObj => {
        return fetch("http://localhost:8088/futureTrips", { //fetches our Trips api
            method: "POST", //creates a method post
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tripObj) //puts our objects in strings
        })
        .then(getTrips)

    }

    return ( //we will return the functions we created above through TripContext. The other components(children) can access the array of objects we stored in Trips and invoke the functions we created above
        <FutureTripContext.Provider value={{
            trips, getTrips, addTrip, searchTerms, setSearchTerms
        }}>
            {props.children}
        </FutureTripContext.Provider>
    )
}
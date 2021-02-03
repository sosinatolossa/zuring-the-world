import React, { useState, createContext } from "react"

//we're going to create travel context that other components can use for data
//it is empty here
export const TravelNoteContext = createContext()

// will use the useState() hook to define a variable that holds the state of the component, and a function that updates it
export const TravelNoteProvider = (props) => {
    const [travelNotes, setTravelNotes] = useState([])

    const getTravelNotes = () => { // creating a function that
        return fetch("http://localhost:8088/travelNotes") //fetches our travelNotes api
        .then(res => res.json()) //changes the data into json file
        .then(setTravelNotes) //updates our state
    }

    const addTravelNote = travelNoteObj => {
        return fetch("http://localhost:8088/travelNotes", { //fetches our travelNotes api
            method: "POST", //creates a method post
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(travelNoteObj) //puts our objects in strings
        })
        .then(response => response.json)

    }
    const getTravelNoteById = (id) => {
        return fetch(`http://localhost:8088/travelNotes/${id}`)
            .then(res => res.json())
    }

    const deleteTravelNote = travelNoteId => { //use Params is travelNoteID
        return fetch(`http://localhost:8088/travelNotes/${travelNoteId}`, {
            method: "DELETE"
        })
            .then(getTravelNotes)
    }

    const updateTravelNotes = travelNote => {
        return fetch(`http://localhost:8088/travelNotess/${travelNote.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(travelNote)
        })
          .then(getTravelNotes)
      }

    return ( //we will return the functions we created above through TravelNoteContext. The other components(children) can access the array of objects we stored in travelNotes and invoke the functions we created above
        <TravelNoteContext.Provider value={{
            travelNotes, getTravelNotes, addTravelNote, getTravelNoteById, deleteTravelNote, updateTravelNotes
        }}>
            {props.children}
        </TravelNoteContext.Provider>
    )
}
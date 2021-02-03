import React, { useContext, useEffect, useState } from "react"
import { TravelNoteContext } from "./TravelNoteProvider"
import "./TravelNote.css"
import { useHistory, useParams } from 'react-router-dom';

export const TravelNoteForm = () => {
    const { addTravelNote, getTravelNoteById, updateTravelNote } = useContext(TravelNoteContext)
    // const { travelNotes, getTravelNotes } = useContext(TravelNoteContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */

    //for edit, hold on to state of travelNote in this view
    const [travelNote, setTravelNote] = useState({
      location: "",
      startDate: "",
      endDate: "",
      planeTicketPrice: 0,
      costOnFood: 0,
      costOnHotel: 0,
      noteDetails: "",
      overallExperience: 0
    });
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding a travel note, you need access to the travel note id for fetching the travel note you want to edit
    const {travelNoteId} = useParams();
	        const history = useHistory();



    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newTravelNote = { ...travelNote }

      /* TravelNote is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newTravelNote[event.target.id] = event.target.value
      // update state
      setTravelNote(newTravelNote)
    }

    const handleClickSaveTravelNote = () => {
      // event.preventDefault() //Prevents the browser from submitting the form

      const location = travelNote.location
      const startDate = travelNote.startDate
      const endDate = travelNote.endDate
      const planeTicketPrice = parseInt(travelNote.planeTicketPrice)
      const costOnFood = parseInt(travelNote.costOnFood)
      const costOnHotel = parseInt(travelNote.costOnHotel)
      const noteDetails = travelNote.noteDetails
      const overallExperience = parseInt(travelNote.overallExperience)

      if (location === "") {
        window.alert("Please type in name of city you visited")
      }

      else if (startDate === "") {
        window.alert("Please type in start date")
      }

      else if (endDate === "") {
        window.alert("Please type in end date")
      }

      else if (planeTicketPrice === 0) {
        window.alert("Please type in plane ticket price")
      }

      else if (costOnFood === 0) {
        window.alert("Please type in total cost on food")
      }
 
      else if (costOnHotel === 0) {
        window.alert("Please type in total cost on hotel")
      } 

      else if (noteDetails === "") {
        window.alert("Please describe your traveling experiences")
      }

      else if (overallExperience === 0) {
        window.alert("Please rate your overall travel experience")
      }

      else {
         //disable the button - no extra clicks
        setIsLoading(true);
        if (travelNoteId){   
          //PUT - update
          updateTravelNote({
              id: travelNote.id,
              location: travelNote.location,
              startDate: travelNote.startDate,
              endDate: travelNote.endDate,
              planeTicketPrice: travelNote.planeTicketPrice,
              costOnFood: travelNote.costOnFood,
              costOnHotel: travelNote.costOnHotel,
              noteDetails: travelNote.noteDetails,
              overallExperience: travelNote.overallExperience
          })
          .then(() => history.push(`/travelNotes`))
        } else {
          //POST - add
          addTravelNote({
            location: travelNote.location,
            startDate: travelNote.startDate,
            endDate: travelNote.endDate,
            planeTicketPrice: travelNote.planeTicketPrice,
            costOnFood: travelNote.costOnFood,
            costOnHotel: travelNote.costOnHotel,
            noteDetails: travelNote.noteDetails,
            overallExperience: travelNote.overallExperience
          })
          .then(() => history.push("/travelNotes"))
        }
      }
   }


    /*
    Reach out to the world and get travel notes state
    and locations state on initialization.
    */
   useEffect(() => {
    if (travelNoteId) {
      getTravelNoteById(travelNoteId)
      .then(travelNote => {
        setTravelNote(travelNote)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }

  }, [])
  

    return (
      <form className="travelNoteForm">
          <h2 className="travelNoteForm__title">{travelNoteId ? "Edit travel note" : "Add new travel note"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">City: </label>
                  <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="City visited" value={travelNote.location}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="startDate">From: </label>
                  <input type="date" id="startDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Start date" value={travelNote.startDate}/>
              </div>
              <div className="form-group">
                  <label htmlFor="endDate">To: </label>
                  <input type="date" id="endDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="End date" value={travelNote.endDate}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="planeTicketPrice">Plane ticket price: </label>
                  <input type="text" id="planeTicketPrice" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Plane ticket price" value={travelNote.planeTicketPrice}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="costOnFood">Total cost on food: </label>
                  <input type="text" id="costOnFood" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Cost on food" value={travelNote.costOnFood}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="costOnHotel">Total money spent on hotel: </label>
                  <input type="text" id="costOnHotel" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Cost on hotel" value={travelNote.costOnHotel}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="noteDetails">Travel details: </label>
                  <input type="text" id="noteDetails" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Travel details" value={travelNote.noteDetails}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="overallExperience">Overall experience: </label>
                  <select defaultValue={travelNote.overallExperience} name="overallExperience" id="overallExperience" onChange={handleControlledInputChange} className="form-control" >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault()
              handleClickSaveTravelNote()
            }}>
          {travelNoteId ? "Save note" : "Add note"}</button>
      </form>
    )
}
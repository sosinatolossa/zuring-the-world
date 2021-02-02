import React, { useContext, useEffect, useState } from "react"
import { TravelNoteContext } from "./TravelNoteProvider"
import "./TravelNote.css"
import { useHistory } from 'react-router-dom';

export const TravelNoteForm = () => {
    const { addTravelNote } = useContext(TravelNoteContext)
    const { travelNotes, getTravelNotes } = useContext(TravelNoteContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */

    const [travelNote, setTravelNote] = useState({
      planeTicketPrice: 0,
      costOnFood: 0,
      costOnHotel: 0,
      noteDetails: "",
      overallExperience: 0
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getTravelNotes()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newTravelNote = { ...travelNote }
      let selectedVal = event.target.value

      /* TravelNote is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newTravelNote[event.target.id] = event.target.value
      // update state
      setTravelNote(newTravelNote)
    }

    const handleClickSaveTravelNote = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const planeTicketPrice = parseInt(travelNote.planeTicketPrice)
      const costOnFood = parseInt(travelNote.costOnFood)
      const costOnHotel = parseInt(travelNote.costOnHotel)
      const noteDetails = travelNote.noteDetails
      const overallExperience = parseInt(travelNote.overallExperience)

      if (planeTicketPrice === 0) {
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
         //invoke addTravelNote passing TravelNote as an argument.
         //once complete, change the url and display the TravelNote list
        addTravelNote(travelNote)
        .then(() => history.push("/travelNotes"))
      }
   }
  

    return (
      <form className="travelNoteForm">
          {/* <fieldset>
              <div className="form-group">
                  <label htmlFor="location">City: </label>
                  <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="City visited" value={travelNote.location}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="date">Plane ticket price: </label>
                  <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date" value={travelNote.date}/>
              </div>
          </fieldset> */}
          <h2 className="TravelNoteForm__title">New Travel Note</h2>


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
            onClick={handleClickSaveTravelNote}>
            Save details
          </button>
      </form>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { TravelNoteContext } from "./travelNoteProvider"
import "./travelNote.css"
import { useHistory, useParams } from 'react-router-dom';

export const TravelNoteForm = () => {
    const { addTravelNote, getTravelNoteById, updateTravelNote } = useContext(TravelNoteContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */

   const currentUser = parseInt(localStorage.getItem("ZuringTheWorld_user"))

   const [imageURL, setImageURL] = useState("")
    //for edit, hold on to state of travelNote in this view
    const [travelNote, setTravelNote] = useState({
      location: "",
      startDate: "",
      endDate: "",
      planeTicketPrice: 0,
      costOfFood: 0,
      costOnHotel: 0,
      noteDetails: "",
      overallExperience: "",
      imageURL: ""
    });
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding a travel note, you need access to the travel note id for fetching the travel note you want to edit
    const {travelNoteId} = useParams();
	        const history = useHistory();

    //image upload handling
    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "ZuringTheWorld")
        setLoading(true)
        const response = await fetch(
            "https://api.cloudinary.com/v1_1/sosina/image/upload",
            {
                method: "POST",
                body: data
            }
        )
        const file = await response.json()
        setImageURL(file.secure_url)
        setLoading(false)
    }


    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newTravelNote = { ...travelNote }

      /* travelNote is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newTravelNote[event.target.id] = event.target.value
      // update state
      setTravelNote(newTravelNote)
    }
    useEffect(() => {
      }, [travelNote])

    const handleClickSaveTravelNote = () => {
      
      const [startMonth, startDay, startYear] = travelNote.startDate.split("-"); 
      const [endMonth, endDay, endYear] = travelNote.endDate.split("-");
      
      const location = travelNote.location
      const startDate = startMonth + "-" + startDay + "-" + startYear
      const endDate = endMonth + "-" + endDay + "-" + endYear
      const planeTicketPrice = parseInt(travelNote.planeTicketPrice)
      const costOfFood = parseInt(travelNote.costOfFood)
      const costOnHotel = parseInt(travelNote.costOnHotel)
      const noteDetails = travelNote.noteDetails
      const overallExperience = travelNote.overallExperience
      
      
      if (location === "") {
        window.alert("Please type in name of city you visited")
      }

      else if (startDate === "" || startDate === NaN) {
        window.alert("Please select or type in start date")
      }

      else if (endDate === "" || endDate === NaN) {
        window.alert("Please select or type in end date")
      }

      //plane ticket price is 0 or not a number, alert user with message
      else if (planeTicketPrice === 0 || planeTicketPrice === NaN) {
        window.alert("Please type in plane ticket price or total money you've spent on gas")
      }

      else if (costOfFood === 0 || costOfFood === NaN) {
        window.alert("Please type in total cost on food")
      }
 
      else if (costOnHotel === 0 || costOnHotel === NaN) {
        window.alert("Please type in total cost on hotel")
      } 

      else if (noteDetails === "") {
        window.alert("Please describe your traveling experiences")
      }

      else if (overallExperience === "") {
        window.alert("Please rate your overall travel experience")
      }

      else {
         //disable the button - no extra clicks
        setIsLoading(true); //this ensures the user cannot repeatedly click the button while the API is being updated
        if (travelNoteId){   //if this is the note that already exists in our api
          //PUT - update
          updateTravelNote({ //the notes will be populated the input fields with current values from the api
              id: travelNote.id,
              location: travelNote.location,
              startDate: startDate,
              endDate: endDate,
              planeTicketPrice: travelNote.planeTicketPrice,
              costOfFood: travelNote.costOfFood,
              costOnHotel: travelNote.costOnHotel,
              noteDetails: travelNote.noteDetails,
              overallExperience: travelNote.overallExperience,
              userId: currentUser,
              imageURL: imageURL
          })
          .then(() => history.push(`/travelNotes`)) //then push it to the travel notes list
        } else { 
          //POST - add
          addTravelNote({ //if not, this must be a new note so the input fields will be empty
            location: travelNote.location,
            startDate: startDate,
            endDate: endDate,
            planeTicketPrice: travelNote.planeTicketPrice,
            costOfFood: travelNote.costOfFood,
            costOnHotel: travelNote.costOnHotel,
            noteDetails: travelNote.noteDetails,
            overallExperience: travelNote.overallExperience,
            userId: currentUser,
            imageURL: imageURL
          })
          .then(() => history.push("/travelNotes")) //then push it to the travel notes list
        }
      }
   }


    /*
    Reach out to the world and get travel notes state
    and locations state on initialization.
    */
   useEffect(() => {
    if (travelNoteId) { //if we have this travel note id in the URL(api)
      getTravelNoteById(travelNoteId) //get that id(we're passing the id)
      .then(travelNote => { //get the object
        
        setTravelNote(travelNote) //set the travel note state with the new object
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }

  }, [])
  

    return (
      <>
        <form className="travelNoteForm">
            <button className="link--close">
                  <Link to="/travelNotes">close</Link>
            </button>
            <h2 className="travelNoteForm__title">{travelNoteId ? "Edit travel note" : "Add new travel note"}</h2>

            <div className="form-group">
                  <div>Upload Image</div>
                  <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                  {loading ? (
                      <h3>Loading...</h3>
                  ) : (
                          <img src={imageURL} style={{ width: "100px" }} />
                      )}
            </div>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">City: </label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="City visited" value={travelNote.location}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">From: </label>
                    <input type="date" id="startDate" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="Start date" value={travelNote.startDate}/>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">To: </label>
                    <input type="date" id="endDate" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="End date" value={travelNote.endDate}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="planeTicketPrice">Plane ticket price/Total money spent on gas: </label>
                    <input type="text" id="planeTicketPrice" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Plane ticket price" value={travelNote.planeTicketPrice}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="costOfFood">Total cost of food: </label>
                    <input type="text" id="costOfFood" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Cost of food" value={travelNote.costOfFood}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="costOnHotel">Total money spent on hotel: </label>
                    <input type="text" id="costOnHotel" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Cost on hotel" value={travelNote.costOnHotel}/>
                </div>
            </fieldset>

            {/* <textarea type="text" id="noteDetails" placeholder="notes"></textarea> */}

            <fieldset>
                <div className="form-group">
                    <label htmlFor="noteDetails">Travel details: </label>
                    <textarea type="text" id="noteDetails" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Travel details" value={travelNote.noteDetails}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="overallExperience">Overall experience: </label>
                    <select defaultValue={travelNote.overallExperience} name="overallExperience" id="overallExperience" onChange={handleControlledInputChange} className="form-control" >
                        <option selected = {travelNote.overallExperience === "😡" ? "selected" : ""} value="😡">😡 (Terrible)</option>
                        <option selected = {travelNote.overallExperience === "😟" ? "selected" : ""} value="😟">😟 (Bad)</option>
                        <option selected = {travelNote.overallExperience === "😕" ? "selected" : ""} value="😕">😕 (Okay)</option>
                        <option selected = {travelNote.overallExperience === "😊" ? "selected" : ""} value="😊">😊 (Good)</option>
                        <option selected = {travelNote.overallExperience === "😃" ? "selected" : ""} value="😃">😃 (Great)</option>
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
      </>
    )
}
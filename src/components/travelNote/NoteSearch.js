import React, { useContext } from "react"
import { TravelNoteContext } from "./travelNoteProvider"
import "./travelNote.css"

export const NoteSearch = () => {
  const { setSearchTerms, searchTerms } = useContext(TravelNoteContext)

  return (
    <>
      <section className="search searchSection">
          <h4 className="otherTravelersNoteTitle">Other travelers notes</h4>
        <div className="results">
          <input type="text"
              className="input--wide"
              onKeyUp={(event) => setSearchTerms(event.target.value)}
              placeholder="Search for a city... " />
        <div className="results-name">Results for <em>{searchTerms}</em></div>
        </div>
      </section>
    </>
  )
}

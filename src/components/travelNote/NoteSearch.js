import React, { useContext } from "react"
import { TravelNoteContext } from "./travelNoteProvider"
import "./travelNote.css"

export const NoteSearch = () => {
  const { setSearchTerms } = useContext(TravelNoteContext)

  return (
    <>
      <section className="search searchSection">
        <div className="results">
          <h4>Other travel notes</h4>
          <input type="text"
              className="input--wide"
              onKeyUp={(event) => setSearchTerms(event.target.value)}
              placeholder="Search for a city... " />
        </div>
        <div className="results-name"><em>Results for </em></div>
      </section>
    </>
  )
}

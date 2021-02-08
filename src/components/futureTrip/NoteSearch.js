import React, { useContext } from "react"
import { FutureTripContext } from "./FutureTripProvider"

export const NoteSearch = () => {
  const { setSearchTerms } = useContext(FutureTripContext)

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
import React, { useContext } from "react"
import { FutureTripContext } from "./FutureTripProvider"

export const NoteSearch = () => {
  const { setSearchTerms } = useContext(FutureTripContext)

  return (
    <>
      <section className="search">
        <h3>Type your next travel destination</h3>
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a city... " />
      </section>
    </>
  )
}
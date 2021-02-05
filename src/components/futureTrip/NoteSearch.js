import React, { useContext } from "react"
import { FutureTripContext } from "./FutureTripProvider"

export const NoteSearch = () => {
  const { setSearchTerms } = useContext(FutureTripContext)

  return (
    <>
      <section className="search searchSection">
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a city... " />
      </section>
    </>
  )
}
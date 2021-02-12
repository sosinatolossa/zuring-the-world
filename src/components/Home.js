import React, {useContext, useEffect} from "react"
import { Route } from "react-router-dom"
import { TravelNoteList } from "./travelNote/travelNoteList"
import { OtherUsersTravelNoteList } from "./travelNote/otherUsersTravelNoteList"
import { NoteSearch } from "./travelNote/NoteSearch"
import { Link } from "react-router-dom"
import { UserContext } from "./user/UserProvider"
import "./travelNote/travelNote.css"
import "./Home.css"



export const HomePage = () => {
    
    const { users, getUsers } = useContext(UserContext)
    useEffect(() => {
        getUsers()
    }, [])
    
    const currentUser = users.find(
        (user) => user.id === parseInt(localStorage.getItem("ZuringTheWorld_user"))
    )

    return (
        <>
        <section className="theWholeHomePage">
            <button className="link--logout">
                    <Link to="/">Log out</Link> 
            </button>
            <h1 className="project-name">Zurīng the World</h1>
            <h1 className="welcomeUserText"><em>Welcome, {currentUser ? currentUser.firstName : "Friend"}</em> 😃</h1>
            <Route path="/travelNotes">
                <section className="homepage">
                    <TravelNoteList />
                    <section className="noteSearch-notes">
                        <NoteSearch />
                        <OtherUsersTravelNoteList />
                    </section>
                </section>
                
            </Route>
        </section>
        </>
    )
}
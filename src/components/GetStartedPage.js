import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import "./GetStartedPage.css"
import "./auth/Login.css"

export const GetStartedPage = () => {
    return (
        <>
        <h1 className="project-name">Zurīng the World</h1>
        <section className="getStartedPage">
            <Route path="/">
                <Login />
                <Register />
            </Route>
        </section>
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import "./GetStartedPage.css"

export const GetStartedPage = () => {
    return (
        <>
            <Route path="/getStarted">
                <Login />
                <Register />
            </Route>
        </>
    )
}
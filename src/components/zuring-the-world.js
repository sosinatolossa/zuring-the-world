import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import "./zuring-the-world.css"
import { PropsAndState } from "./PropsAndState"

export const ZuringTheWorld = () => (
    <>
        {/* <PropsAndState yourName="Brenda" /> */}
        <Route 
            render={() => {
                if (localStorage.getItem("ZuringTheWorld_user")) {
                  return (
                    <>
                      <ApplicationViews />
                    </>
                  );
                } else {
                  return <Redirect to="/" />;
                }
            }}
        />
        {/* <Route path="/">
            <GetStartedPage />
        </Route> */}
        {/* <Route path="/register">
            <Register />
        </Route> */}
    </>
)
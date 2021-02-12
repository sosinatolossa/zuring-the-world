import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { GetStartedPage } from "./GetStartedPage"
import "./zuring-the-world.css"


export const ZuringTheWorld = () => (
    <>
        <Route 
            render={() => {
                if (localStorage.getItem("ZuringTheWorld_user")) {
                  return (
                    <>
                      <ApplicationViews />
                    </>
                  );
                } else {
                  return <Redirect to="/auth" />;
                }
            }}
        />
        <Route path="/auth">
          <GetStartedPage />
        </Route>
    </>
)
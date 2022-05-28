import React from "react"
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { Login } from "../../views/pages/auth/login.page";

export const Routes:React.FC =():JSX.Element => {
    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <ReactRouterRoutes>
                <Route element={<Login/>} path="/"></Route>
            </ReactRouterRoutes>
            
        </React.Suspense>
    )
}
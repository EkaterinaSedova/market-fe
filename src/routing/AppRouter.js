import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import {START_ROUTE} from "./paths"

const AppRouter = () => {
    let currentUser = true;
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} exact element={<Component />}/>
            )}
            {currentUser && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} exact element={<Component />}/>
            )}
            <Route path='*' element={<Navigate to={START_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
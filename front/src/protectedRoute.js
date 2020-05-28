import React from "react";
import { Route, Redirect } from "react-router-dom";

//protected route for user -- to do protected route for admin
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("CC_Token")) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }}
                    />
                };
            }}
        />
    );
};


export default ProtectedRoute;

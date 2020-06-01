import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

//protected route for user -- to do protected route for admin
const ProtectedRouteUser = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(Cookies.get('token')){
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


export default ProtectedRouteUser;

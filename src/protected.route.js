import * as React from "react"
import { Redirect, Route } from 'react-router-dom';
import Auth from './auth'
export const ProtectedRoute = ({component: Component, ...rest})=>{
    return (
        <Route
            {...rest}
            render={props => {
                if (Auth.authenticated()){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                        pathname: '/branch',
                        state:{
                            from: props.location
                        }
                    }
                    }/>
                }
            }}
            />
    )
        };
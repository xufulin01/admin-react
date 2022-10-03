import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/sessions';
export const PerRoute = ({ component: Component, ...rest }) => {
    console.log('====================================');
    console.log(getToken());
    console.log('====================================');
    return (
        <Route
            {...rest}
            render={
                reoteProps =>
                    getToken() ? <Component {...reoteProps} /> : <Redirect to='/' />

            } />
    )
}
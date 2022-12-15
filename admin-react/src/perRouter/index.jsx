import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '@/utils/tokens';
export const PerRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                reoteProps =>
                    getToken() ? <Component {...reoteProps} /> : <Redirect to='/' />

            } />
    )
}
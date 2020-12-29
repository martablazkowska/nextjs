import React from 'react';
import App from "next/app";
import {UserProvider} from 'common/contexts/user-context';

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        );
    }
}

export default MyApp;

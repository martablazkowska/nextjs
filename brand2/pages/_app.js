import React from 'react';
import App from "next/app";
import { Provider } from 'common/contexts/user-context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;

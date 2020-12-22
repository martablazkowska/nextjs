import React from 'react';
import App from "next/app";
import { UserProvider } from 'common/contexts/user-context';
import { LanguageProvider } from 'common/contexts/language-context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LanguageProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </LanguageProvider>
    );
  }
}

export default MyApp;

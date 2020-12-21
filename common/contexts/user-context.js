import React from 'react';

const UserContext = React.createContext({
  id: null,
  username: null
});

// context provider
const UserProvider = ({ children }) => {

  const user = {
    id: 1,
    username: 'Alfred'
  }

  return <UserContext.Provider value={user}>{ children }</UserContext.Provider>;
};

export { UserContext, UserProvider };

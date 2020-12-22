import React from "react";

const Layout = ({children}) => {
  return (
    <div>
      <Sidebar/>
      <div>
        <p>This is our homepage  <strong>brand 1</strong></p>
        <Button
          href='https://google.com'
          rel='noopener'
        >I'm a primary button</Button>
        <Button secondary>I'm a secondary button</Button>
      </div>
      <Footer/>
    </div>
  )
};

export default Layout;

import React from 'react';
import NavBar from './NavBar';
import MainHeader from './MainHeader';

type LayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="page has-background-dark is-family-sans-serif has-text-light ">
      <MainHeader />
      <NavBar />
      {props.children}
    </div>
  )
}

export default Layout
import React from 'react';
import { Link } from 'gatsby'

const NavBar: React.FC = () => {
  return (
    <div className="block">
      <nav className="buttons is-centered">
        <Link to="/" className="button is-light" activeClassName="is-active">My Notes</Link>
        <Link to="/create" className="button is-light" activeClassName="is-active">Add Note</Link>
      </nav>
    </div>
  )
}

export default NavBar
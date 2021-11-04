import React from 'react';
import { Link } from 'gatsby'

const NavBar: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="button is-light">My Notes</Link>
        <Link to="/create" className="button is-light">Add Note</Link>
      </nav>
    </div>
  )
}

export default NavBar
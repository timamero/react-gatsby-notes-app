import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MainHeader: React.FC = () => {
  return (
    <div>
      <div className="m-2 is-flex is-justify-content-center">
        <StaticImage 
        src="../images/note-icon.png" 
        alt="Notes application" 
        placeholder="blurred"
        layout="fixed"
        width={60}
        height={60}
      />
      </div>
      
      <h1 className="title is-1 has-text-centered mb-4">Notes App</h1>
    </div>
    
  )
}

export default MainHeader
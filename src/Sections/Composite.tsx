import React from 'react'
import CompositeScreenshot from "../Assets/composite_screenshot_1.png"

export default function Composite() {
  return (
    <section style={{color: "white",background:"#6366f1", justifyContent:"flex-start"}}>
        <div className='project-info-wrapper'>
        <h2>Composite</h2>
        <h3>College comparison tool with a focus on equity.</h3></div>
        <div className='quickfacts'>
        <img src={CompositeScreenshot} className="projectScreenshot"/>
        <ul>
          <li>Implements Data from the US Department of Education</li>
          <li>Sourced from a live database</li>
          <li>Written in JavaScript using the React Framework</li>
          <li>Uses Open-Source Libraries for Graphing</li>          
          <li>Involved Usage of Git CLI and Github CLI</li>          

       </ul>
        </div>
    </section>
  )
}

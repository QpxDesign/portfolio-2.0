import React from 'react'
import Lead from "../Sections/Lead"
import Photography from '../Sections/Photography'
import Composite from '../Sections/Composite'

export default function Home() {
  return (
    <div className='home-wrapper'>
        <Lead />
        <Composite/>
    </div>
  )
}

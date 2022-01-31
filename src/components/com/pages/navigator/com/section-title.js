import React from 'react'
import Help from "./help"

const SectionTitle = ( { text, help } ) => {
  return (
    <div className="mb-4">
      <h1 className="text-xl">{text} <Help text={help}/></h1>
    </div>
  )
}

export default SectionTitle
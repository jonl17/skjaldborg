import React from 'react'

const RichText = ({ html }) => {
  return (
    <div
      className='py-12 px-5 lg:px-56 bg-primary text-secondary rich-text lg:w-3/4'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText

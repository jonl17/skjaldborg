import React from 'react'

const RichText = ({ html }) => {
  return (
    <section className='py-12 px-5 lg:px-56 bg-primary '>
      <div
        className='rich-text max-w-4xl mx-auto text-secondary'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}

export default RichText

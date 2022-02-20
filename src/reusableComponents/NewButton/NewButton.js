import React, { useState } from 'react'
import cn from 'classnames'

const NewButton = ({ children, onClick, external = false }) => {
  const [active, setActive] = useState(false)

  const wrapperClassName =
    'overflow-hidden relative px-14 py-2 bg-secondary text-primary lg:text-white lg:bg-transparent border-2 transition-colors'

  const Fill = ({ children }) => (
    <span
      style={
        active
          ? { clipPath: 'inset(0%)' }
          : { clipPath: 'inset(0% 100% 0% 0%)' }
      }
      className={cn(
        'hidden lg:grid absolute top-0 place-items-center left-0 h-full w-full bg-secondary clip'
      )}
    >
      {children}
    </span>
  )

  const Corner = () => (
    <div
      className={cn('absolute h-full w-5 grid -left-3 -top-[13px] bottom-0', {
        'text-primary': active,
        'text-white': !active,
      })}
    >
      <span className='h-10 w-5 bg-current rotate-[25deg]' />
      <span className='h-10 w-5 bg-current -rotate-[25deg]' />
    </div>
  )

  const Content = () => (
    <>
      <Corner />
      <h3 className='uppercase relative mt-1'>{children}</h3>
      <Fill>
        <Corner />
        <h3 className='uppercase relative text-primary mt-1'>{children}</h3>
      </Fill>
    </>
  )

  if (external) {
    return (
      <a
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={cn(wrapperClassName, {
          'lg:border-white border-primary': !active,
          'border-primary': active,
        })}
        href={onClick}
        target='_blank'
      >
        <Content />
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(wrapperClassName, {
        'border-white': !active,
        'border-primary': active,
      })}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Content />
    </button>
  )
}

export default NewButton

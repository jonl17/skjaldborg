import React, { useState } from 'react'
import cn from 'classnames'

const AlertBanner = () => {
  const [close, setClose] = useState(false)
  return (
    <button
      onClick={() => setClose(true)}
      className={cn(
        'animate-roll-down-enter p-10 border-4 max-w-lg border-primary text-center bg-secondary text-primary lg:mb-5 relative',
        {
          invisible: close,
        }
      )}
    >
      <h3 className='absolute top-3 right-3'>X</h3>

      <h3 className='mb-3'>
        Skjaldborg verður haldin næst um hvítasunnuhelgi 2022.
      </h3>
      <p className='text-lg'>
        Hér að neðan er dagskrá hátíðarinnar frá síðasta ári, sem sýnd verður í
        Skjaldborgarbíói um helgina 14.-16. maí 2021.
      </p>
    </button>
  )
}

export default AlertBanner

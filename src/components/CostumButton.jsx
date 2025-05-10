import React from 'react'

const CostumButton = ({title}) => {
  return (
    <div
        className='flex items-center justify-center w-[170px] h-[50px] rounded-3xl  bg-[var(--main-color)] text-black shadow-2xl hover:bg-black hover:text-[var(--main-color)] hover:border-2 hover:border-[var(--main-color)] cursor-pointer transition'
    >
        {title}
    </div>
  )
}

export default CostumButton
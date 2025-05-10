import React from 'react'

const Education = ({level, years, description}) => {
    return (
        <div className="w-fit p-3 m-3 rounded-2xl border border-[var(--main-color)]">
            <div className="text-2xl text-[var(--main-color)] font-bold">
                {level}
            </div>
            <div className="text-xs text-[#b4f690] font-light">
                {years}
            </div>
            <div>
                {description}
            </div>
        </div>)
}

export default Education
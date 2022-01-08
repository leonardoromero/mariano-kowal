import React from 'react'

export const DiscographyGrid = ( {children} ) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-5 lg:gap-10 font-bold text-bg w-11/12 lg:w-3/4 mx-auto">
            {children}
        </div>
    )
}

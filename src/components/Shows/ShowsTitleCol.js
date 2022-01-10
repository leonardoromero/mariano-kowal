import React from 'react'

export const ShowsTitleCol = ({children}) => {
    return (
        <div className="card-title w-1/2 text-5xl md:text-7xl font-bold p-4 my-auto text-bg hover:text-complementary">
            {children}
        </div>
    )
}

import React from 'react'

export const ShowsContainer = ({children}) => {
    return (
        <div className="card lg:card-side backdrop-blur-2xl flex w-11/12 lg:w-1/2">
            {children}
        </div>
    )
}

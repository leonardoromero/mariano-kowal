import React from 'react'

export const Quote = () => {
    return (
        <div className='flex justify-center bg-primary text-lg'>
            <blockquote className='p-4 italic text-neutral-700 '>
                <div className="quote-sign" aria-hidden="true">&ldquo;</div>
                <p>Casi sin creer</p>
                <p>Aprendí a correr</p>
                <cite className='text-right block'>Sin vértigo</cite>
            </blockquote>
        </div>
    )
}

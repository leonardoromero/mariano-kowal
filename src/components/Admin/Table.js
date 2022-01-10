import React, { useContext } from 'react'
import { ShowsContext } from '../../context/ShowsContext'
import { Row } from './Row.js'

export const Table = () => {

    const {shows, handleDelete} = useContext(ShowsContext)

    return (
        <>
            <div className="flex flex-col h-screen w-1/2 justify-center items-center">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Fecha
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Lugar
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Dirección
                                        </th>
                                        <th scope="col" className="relative py-3 px-6">
                                            <span className="sr-only"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        shows.map(show => <Row {...show} key={show.id} deleteItem={handleDelete}/>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

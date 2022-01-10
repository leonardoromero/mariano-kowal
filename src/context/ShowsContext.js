import { createContext } from "react";
import {shows} from '../helpers/shows.js'

export const ShowsContext = createContext();

export const ShowsProvider = ( {children} ) => {

    const getID = (e) => {
        const row = e.target.parentElement.parentElement.children
        const joinedDate = row[1].innerText.split(" ").join("")
        const shortPlace = row[2].innerText.toLowerCase().slice(0, 2)
        const id = joinedDate + shortPlace
        return id
    }

    const handleDelete = (e) => {
        shows.filter(show => show.id !== getID(e))
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const day = e.target.parentElement[0].value
        const month = e.target.parentElement[1].value
        const place = e.target.parentElement[2].value
        const shortPlace = place.toLowerCase().slice(0, 2)
        const address = e.target.parentElement[3].value
        const link = e.target.parentElement[4].value
        const id = day + month + shortPlace
        let shows = [...shows, {id, day, month, place, address, link}]
    }


    return (
        <ShowsContext.Provider value={{
            shows,
            handleDelete,
            handleAdd,
        }}>
            {children}
        </ShowsContext.Provider>
    )
}

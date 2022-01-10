import React from 'react'

export const Row = ( {day, month, place, link, address, deleteItem} ) => {
    return (
        <tr className="bg-white border-b">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                {day} {month}
            </td>
            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                <a href={link} target='_blank' rel='noopener noreferrer'>{place}</a>
            </td>
            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                {address}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button type='submit' onClick={deleteItem}>❌</button>
            </td>
          </tr>
    )
}

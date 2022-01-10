import React from 'react'
import { useContext } from 'react'
import { ShowsContext } from '../../context/ShowsContext'

export const SetNewShow = ( ) => {

    const {handleAdd} = useContext(ShowsContext)


    return (
        <div className='flex flex-col h-screen w-full justify-center items-center space-y-5'>
            <h2 className='text-3xl'>Nuevo Show</h2>
            <form className='border border-gray-200 p-5 rounded-xl w-1/2 flex flex-col'>
                <div className="mb-4">
                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                    <input type="number" id="day" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="10" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="month" className="block mb-2 text-sm font-medium text-gray-900">Mes</label>
                    <input type="text" id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='FEB' required/>
                    <p className="mt-1 text-xs text-gray-500">Solo las 3 primeras letras</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="place" className="block mb-2 text-sm font-medium text-gray-900">Nombre del lugar</label>
                    <input type="text" id="place" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='La Dama de Bollini' required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Dirección</label>
                    <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Pasaje Bollini 2281, CABA' required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900">Link</label>
                    <input type="text" id="link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='https://www.instagram.com/ladamadebollini/' required/>
                    <p className="mt-1 text-xs text-gray-500">Importantísimo que comience con https://</p>
                </div>
                <button 
                    type="submit" 
                    onClick={handleAdd}
                    className="text-complementary bg-bg hover:bg-complementary hover:text-bg font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    🎸 🔥 🤘
                    </button>
            </form>
        </div>
    )
}

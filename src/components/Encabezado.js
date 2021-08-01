import React from 'react'

export const Encabezado = ({categories,setCategories}) => {

    const handleReset = () => {
        setCategories([])
    }
    return (
        <>
            <h1 className="text-pink-400 prose text-4xl font-bold uppercase">GIFT-EXPERT App</h1>
            <hr className="border-pink-400" />
            <button className="bg-indigo-500 p-2 rounded-md text-white uppercase my-3" onClick={handleReset}>Reset categories ({categories.length})</button>
        </>
    )
}
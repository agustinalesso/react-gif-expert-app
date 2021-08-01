import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({categories,setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Logica del submit
        const i = categories.indexOf(inputValue)
        if (inputValue && i === -1){
            setCategories( cat => [inputValue,...cat]);
            setInputValue('');
        }else{
            alert('Debe ingresar un valor y no puede ser repetido!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="appearance-none w-full text-gray-800 rounded-md p-2 my-6 bg-pink-100 border-1 focus:border-pink-300 border-pink-300 focus:ring-1 focus:ring-pink-500 focus:ring-offset-3 focus:ring-offset-pink-500 focus:outline-none" 
                placeholder="Add category" 
                value={inputValue}
                onChange={handleInputChange}
            />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
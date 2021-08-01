import React from 'react'
import PropTypes from 'prop-types';
import { GifGrid } from './GifGrid';

export const Categorias = ({categories}) => {
    return (
        <ol className="text-white">
        { 
            categories.map(category => <GifGrid key={category} category={category} />)
        }
        </ol>
    )
}

Categorias.propTypes = {
    categories: PropTypes.array.isRequired
}
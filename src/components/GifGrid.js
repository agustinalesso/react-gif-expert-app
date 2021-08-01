import React, {useEffect, useState} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ImageCard } from './ImageCard';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <li className="w-full bg-pink-500 text-gray-100 uppercase rounded-t-md font-bold mb-4">
            <div className="p-2">{category}</div>
            <div className="bg-pink-800 p-2 flex flex-col items-center justify-center">
                { loading && <p>Cargando...</p> }
                {
                    images.map(image => <ImageCard key={image.id} image={image} />)
                }
            </div>
        </li>
    )
}

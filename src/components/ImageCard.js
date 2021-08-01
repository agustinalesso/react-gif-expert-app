import React from 'react'

export const ImageCard = ({image}) => {
    return (
        <div className="m-1">
            <img className="w-42 h-42 object-cover" src={image.image} alt={image.title} />
        </div>
    )
}

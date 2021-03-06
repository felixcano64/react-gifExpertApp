

import React from 'react';
import { GifGridItem } from '../components/GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data:images , loading} = useFetchGifs( category );   
    
    return (
        <>
            <h3>{ category }</h3>
            {loading && <p>Cargando...</p>}
            <div className='card-grid'>
                {
                    images.map(img => (     
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

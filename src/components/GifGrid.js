import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    const {data:gifs, loading} = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>

            {loading && <p>Cargando...</p>}

            <div className="card-grid">
                { gifs.map( gif => (
                        <GifGridItem key={gif.id} {...gif}/>
                    )
                )
                }
            </div>
        </>
    )
}

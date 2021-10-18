import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Piece'])

    /* const handleAdd = () => {
        //setCategorias([...categorias, 'One Piece']);
        setCategorias(cats => [...cats, 'One Piece']);
    } */

    return (
        <div>
            <h3>GifExpertApp</h3>
            <AddCategory setCategorias={setCategorias} />
            <hr/>

            { categorias.map(categoria => <GifGrid key={categoria} categoria={categoria}>{categoria}</GifGrid>) }
        </div>
    )
}

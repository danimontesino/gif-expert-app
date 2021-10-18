import React from 'react'

export const GifGridItem = ( props ) => {
    const {url, title} = props;

    return (
        <div className="card animate__fadeInDown">
            <img src={url} title={title} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

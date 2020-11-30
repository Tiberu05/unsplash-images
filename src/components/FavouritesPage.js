import React from 'react';

import './FavouritesPage.css';

import ImageList from './ImageList';

const FavouritesPage = props => {

    return (
        <div className='favourites-page'>
            <ImageList 
                images={props.images} 
                handleImage={props.handleImage} 
                handleUrl={props.handleUrl} 
                openModal={() => props.openModal()} 
            />
        </div>
    )
};

export default FavouritesPage;
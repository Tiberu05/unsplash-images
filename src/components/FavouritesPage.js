import React from 'react';

import './FavouritesPage.css';

import ImageList from './ImageList';

const FavouritesPage = props => {

    return (
        <div className='favourites-page'>

            <div className='page-title'>
                <h2> Favourite Images</h2>
            </div>
            
            <ImageList 
                images={props.images} 
                handleImage={props.handleImage} 
                handleUrl={props.handleUrl} 
                openModal={() => props.openModal()}
                favouritesList={true}
            />
        </div>
    )
};

export default FavouritesPage;
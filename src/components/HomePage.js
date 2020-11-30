import React from 'react';

import './HomePage.css';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

const HomePage = props => {


    return (
        <div className='home-page'>

            <div className='page-title'>
            {
                props.searchInput ? <h2>You searched for '{props.searchInput}' images</h2> : null
            }
            </div>
            
            <ImageList 
                images={props.images} 
                handleImage={props.handleImage} 
                handleUrl={props.handleUrl} 
                openModal={() => props.openModal()}
                favouritesList={false}
                favourites={props.favourites}
            />
        </div>
    )
};

export default HomePage;
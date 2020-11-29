import React from 'react';

import './HomePage.css';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

const HomePage = props => {


    return (
        <div className='home-page'>
            <SearchBar onSubmit={props.onSubmit} />
            <ImageList images={props.images} handleImage={props.handleImage} openModal={() => props.openModal()} />
        </div>
    )
};

export default HomePage;
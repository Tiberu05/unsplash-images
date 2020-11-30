import './ImageList.css';
import React from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';


const ImageList = (props) => {

    console.log(props);

    const images = props.images.map(el => {
        return <ImageCard 
                    key={el.id} 
                    image={el} 
                    handleUrl={props.handleUrl} 
                    handleImage={props.handleImage} 
                    openModal={() => props.openModal()} 
                    favourites={props.favourites}
                    favouritesList={props.favouritesList}
                />
    });

    return (
        <div className='images-container'>
        
            <div className='image-list'>{images}</div>
        </div>
    )
}


export default ImageList;
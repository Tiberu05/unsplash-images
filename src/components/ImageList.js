import './ImageList.css';
import React from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';


const ImageList = (props) => {

    const images = props.images.map(el => {
        return <ImageCard 
                    key={el.id} 
                    image={el} 
                    handleUrl={props.handleUrl} 
                    handleImage={props.handleImage} 
                    openModal={() => props.openModal()} 
                />
    });

    return (
        <div className='image-list'>{images}</div>
    )
}


export default ImageList;
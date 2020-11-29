import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import unsplash from '../api/unsplash';

import HomePage from './HomePage';
import Modal from './Modal';


const App = () => {


    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [img, setImg] = useState(null);
    
    
    const onSearchSubmit = async (term) => {

        const result = await unsplash.get(`/search/photos?per_page=30`, {
                params: { query: term }
        });

        setImages(result.data.results);
        console.log(images);
    
    }    

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handleImage = image => {
        setImg(image);
    }
        

    return (

        
            <div className='ui container'>

                <HomePage onSubmit={onSearchSubmit} images={images} handleImage={handleImage} openModal={() => openModal()} />

                <Modal open={showModal} imgUrl={img} closeModal={closeModal}><img src={img} /></Modal>

            </div>
        
        
    );
    
}

export default App;
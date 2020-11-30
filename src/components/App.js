import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import unsplash from '../api/unsplash';
import ls from 'local-storage';

import HomePage from './HomePage';
import SearchBar from './SearchBar';
import FavouritesPage from './FavouritesPage';
import Modal from './Modal';


const App = () => {


    const [images, setImages] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    const [img, setImg] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        searchHistory.reverse();
    }, [searchHistory])

    useEffect(() => {
        setFavourites(ls.get('favourite-photos') || []);
        setSearchHistory(ls.get('search-history') || []);
    }, []);
    
    
    const onSearchSubmit = async (term) => {

        const result = await unsplash.get(`/search/photos?per_page=5`, {
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

    const handleUrl = imageUrl => {
        setUrl(imageUrl);
    }

    const addFavourite = image => {
        const currentFavourites = favourites.map(el => el);
        const index = currentFavourites.indexOf(image);
        index === -1 ? currentFavourites.push(image) : alert('Image already added to favourites');
        
        setFavourites(currentFavourites);
        ls.set('favourite-photos', currentFavourites);
    }

    const removeFavourite = image => {
        const nextFavourites = favourites.filter(el => el.id !== image.id);

        setFavourites(nextFavourites);
        ls.set('favourite-photos', nextFavourites);
    }

    const addToSearchHistory = (searchTerm) => {
        const currentSearchHistory = searchHistory.map(el => el);
        currentSearchHistory.push(searchTerm);
        setSearchHistory(currentSearchHistory);
        ls.set('search-history', currentSearchHistory);
    }

    const clearHistory = () => {
        setSearchHistory([]);
        ls.set('search-history', []);
    }
        

    return (

        <Router>

            <div className='ui container'>

                <SearchBar 
                    onSubmit={onSearchSubmit} 
                    favouritesNumber={favourites.length}
                    addToSearchHistory={addToSearchHistory}
                    searchHistory={searchHistory}
                    clearHistory={clearHistory}
                />

                <div className='divider'></div>

                <Switch>
                
                <Route exact path='/' component={() => {
                    return <HomePage 
                        onSubmit={onSearchSubmit} 
                        images={images} handleUrl={handleUrl} 
                        handleImage={handleImage} 
                        openModal={() => openModal()}
                    />
                }} />

                <Route exact path='/favourites' component={() => {
                    return <FavouritesPage 
                        onSubmit={onSearchSubmit} 
                        images={favourites} handleUrl={handleUrl} 
                        handleImage={handleImage} 
                        openModal={() => openModal()}
                    />
                }} />
                

                </Switch>

                <Modal open={showModal} url={url} image={img} favourites={favourites} closeModal={closeModal} removeFavourite={removeFavourite} addFavourite={addFavourite}>
                    
                    {
                        img ? <img src={img.urls.full} /> : null
                    }
                    
                </Modal>   

            </div>

        </Router>
        
    );
    
}

export default App;
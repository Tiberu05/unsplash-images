import React, { useState } from 'react';
import './SearchBar.css';
import { withRouter, useLocation } from 'react-router-dom';



const SearchBar = props => {

    const [searchInput, setSearchInput] = useState('');

    const location = useLocation();

    const onSubmitForm = (event) => {
        event.preventDefault();
        
        props.onSubmit(searchInput);
    }
    
    return (
        <div className='search-bar'>

            {
                location.pathname === '/' ? (
                    <form onSubmit={onSubmitForm} className='search-form'>

                        <div className='ui input'>
        
                            <input 
                                type='text'
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                placeholder='Search for unsplash images'
                            />
                        </div>
                    
                    </form>
                ) : (
                    <div className='search-form'>

                        <div className='return-link' onClick={() => props.history.push('/')}>
                            Return to search
                        </div>

                    </div>
                )
            }

           

            <div className='favourites' onClick={() => props.history.push('/favourites')}>
                <span className='favourites-text'>Favourites</span>
                <i class="circle outline icon"><span className='number'>{props.favouritesNumber}</span></i>
            </div>

        </div>
        
    )
    

}

export default withRouter(SearchBar);
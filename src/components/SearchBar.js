import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { withRouter, useLocation } from 'react-router-dom';

import ToggleButton from './ToggleButton';



const SearchBar = props => {

    const [searchInput, setSearchInput] = useState('');

    const location = useLocation();

    const onSubmitForm = (event) => {
        event.preventDefault();

        props.getSearchInput(searchInput);
        
        props.addToSearchHistory(searchInput);
        
        props.onSubmit(searchInput);

        setSearchInput('');
    }

    useEffect(() => {
        const index = props.searchHistory.indexOf(searchInput);
        if (index !== -1) {
            props.onSubmit(searchInput);
            props.getSearchInput(searchInput);
            props.history.push('/');
        }
    }, [searchInput])
    
    return (
        <div className='search-bar'>

            {
                props.theme === 'light' ? (
                    <div className='theme-select'>
                        <span>Set Dark Theme</span>
                        <i className="toggle off icon theme-button" style={{ fontSize: '2rem'}} onClick={props.themeToggler} ></i> 
                    </div>

                    ) : (

                    <div className='theme-select'>
                        <span>Set Light Theme</span>
                        <i className="toggle on icon theme-button" style={{ fontSize: '2rem'}} onClick={props.themeToggler} ></i> 
                    </div>
                    )

            }

            
            {
                location.pathname === '/' ? (
                    <form onSubmit={onSubmitForm} className='search-form'>

                        <div className='ui input'>
        
                            <input 
                                type='text'
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                placeholder='Search for unsplash images'
                                style={ props.theme === 'light' ? {backgroundColor: 'white', color: 'grey'} : {backgroundColor: 'rgb(49, 47, 47)', color: 'white'}}
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

            <div className='search-history'>
                Search history:{'\u00A0'}
                <div className='search-history-items'>
                    {
                        props.searchHistory.slice(0, 10).map((el, index) => {
                            return <div key={index} className='search-item' onClick={() => setSearchInput(el)}> {el}{'\u00A0'}</div>
                            
                        })
                    }
                </div>

                <div className='clear-history' onClick={() => props.clearHistory()}>Clear search history</div>

            </div>

            <div className='favourites' onClick={() => props.history.push('/favourites')}>
                <span className='favourites-text'>Favourites</span>
                <i className="circle icon"><span style={{ left: `${props.favouritesNumber.toString().length > 1 ? '15%' : '32%'}`}} className='number'>{props.favouritesNumber}</span></i>
            </div>

        </div>
        
    )
    

}

export default withRouter(SearchBar);
import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { withRouter, useLocation } from 'react-router-dom';



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
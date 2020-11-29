import './SearchBar.css';
import React from 'react';


class SearchBar extends React.Component {

    state = { searchInput: '' };

    onSubmitForm = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.searchInput);
    }
    
    render() {
        return (
                <form onSubmit={this.onSubmitForm} className='ui form'>
                    <div className='field'>
                        <input 
                            type='text'
                            value={this.state.searchInput}
                            onChange={e => this.setState({ searchInput: e.target.value })}
                            placeholder='Search for images'
                        />
                    </div>
                </form>
        )
    }

}

export default SearchBar;
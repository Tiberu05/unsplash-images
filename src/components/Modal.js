import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

import { useOuterClick } from '../hooks/OuterClick';

const Modal = (props) => {

    const innerRef = useOuterClick(e => {
        props.closeModal();
    })

    const checkExistingFavourite = () => {
        const index = props.favourites.indexOf(props.image);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    }

    if (!props.open) return null;

    return ReactDOM.createPortal(
        <div className='overlay' onClick={() => props.closeModal()}>

            <div className='modal-buttons'>
                <button className='unsplash-button'>
                    <a className='modal-link' href={props.url} target='_blank'> Buy from UNSPLASH</a>
                </button>
                {
                    !checkExistingFavourite() ? (
                        <button className='favourites-button' onClick={() => props.addFavourite(props.image)}>
                            Add to favourites
                        </button>
                    ) : (
                        <button className='favourites-button' onClick={() => props.removeFavourite(props.image)}>
                            Remove from favourites
                        </button>
                    )
                }
                
            </div>

            <div className='modal'>
                <div className='modal-image'>
                    {props.children}
                </div>
            </div>

        </div>,
        document.querySelector('#modal') 
    )
}

export default Modal;
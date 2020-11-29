import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

import { useOuterClick } from '../hooks/OuterClick';

const Modal = (props) => {

    const innerRef = useOuterClick(e => {
        props.closeModal();
    })

    console.log(props);

    if (!props.open) return null;

    return ReactDOM.createPortal(
        <div className='overlay' onClick={() => props.closeModal()}>

            <div className='modal-buttons'>
                <button className='unsplash-button'>
                    <a className='modal-link' href={props.imgUrl} target='_blank'> Buy from UNSPLASH</a>
                </button>
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
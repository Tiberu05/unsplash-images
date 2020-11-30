import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';

import './ImageCard.css';

const ImageCard = props => {

    const [spans, setSpans] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpan);
    }, [])

    const setSpan = () => {
        const height = imageRef.current.clientHeight;

        const spans = Math.floor(height / 10 + 0.9);

        setSpans(spans);
    }


    const { description, urls, links } = props.image;

    return (
        <div style={{ gridRowEnd: `span ${spans}`}} >
                <img 
                    className='image-card'
                    ref={imageRef}
                    alt={description} 
                    src={urls.small}
                    onClick={() => {
                        props.handleImage(props.image);
                        props.handleUrl(links.html);
                        props.openModal();
                    }}
                />
        </div>
    );
}

export default ImageCard;
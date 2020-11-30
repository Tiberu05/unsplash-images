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
        
        let height;

        if (imageRef.current) {
            height = imageRef.current.clientHeight;
        }
        
        const spans = Math.floor(height / 10 + 0.9);

        setSpans(spans);
    }


    const { description, urls, links } = props.image;

    return (
        <div className='row-card' style={{ gridRowEnd: `span ${spans}`}} >
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
                {   
                    !props.favouritesList ? (
                        props.favourites.map(el => {
                            return el.id === props.image.id ? <i className="star icon"></i> : null
                        })
                    ) : (
                        <i className="star icon"></i>
                    )
                   
                }
                
        </div>
    );
}

export default ImageCard;
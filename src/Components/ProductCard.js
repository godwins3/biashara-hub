import React, { useState } from 'react';
import Text from './ui/Text';
import Button from './ui/Button';
import Loader from './ui/Loader';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ 
    title, 
    src, 
    date, 
    price 
}) => {
    const [loader] = useState(false);

    const navigate = useNavigate();
    const handler = () => {
        navigate('/dashboard');
    }

    return (
        <div className="product-card">
            
            <div className="image-container">
                <img src={src} alt={title} className="product-image" />
            </div>
            <Text variant="price" className="product-title">
                {title}
            </Text>
            <Text variant="infoXs" className="product-date">
                {date}
            </Text>
            <div className="product-footer">
                <Text variant="price" className="product-price">
                    ksh. {price.toLocaleString()}
                </Text>
                {loader ? (
                    <Loader />
                ) : (
                    <Button
                        variant="outline"
                        onClick={handler}
                        title="Book"
                    />
                )}
            </div>
        </div>
    );
};

export default ProductCard;

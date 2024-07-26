import React, { useState } from 'react';
import { DotMenu } from './ui/Icon';
import Text from './ui/Text';
import Button from './ui/Button';
import Loader from './ui/Loader';
import './ProductCard.css';

const ProductCard = ({ 
    title, 
    productId, 
    src, 
    addToCart, 
    date, 
    price 
}) => {
    const [loader, setLoader] = useState(false);

    const handleAddToCart = async () => {
        setLoader(true);
        await addToCart(productId);
        setLoader(false);
    };

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
                        onClick={handleAddToCart}
                        title="Add to Cart"
                    />
                )}
            </div>
        </div>
    );
};

export default ProductCard;

import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { toast } from 'react-hot-toast';

const Appliancecat = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Appliance'); // Set the default or desired category
    const [pageNumber, setPageNumber] = useState(1);
    const [limit, setLimit] = useState(10);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/getproductbycategory/?category=${category}&pageNumber=${pageNumber}&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Failed to fetch products');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [category, pageNumber, limit]);

    return (
        <div className="grid grid-cols-4 gap-4 flex-1">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    productId={product._id}
                    src={product.imageUrl}
                    title={product.name}
                    date={new Date(product.createdAt).toLocaleDateString()}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default Appliancecat;

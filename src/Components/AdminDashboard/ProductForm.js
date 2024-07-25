'use client';
import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../ui/Loader';
import './ProductForm.css';

const ProductForm = () => {
    const token = localStorage.getItem('authToken');
    const [session, setSession] = useState(null); // Simulate session state
    const [status, setStatus] = useState('unauthenticated');
    const [licenseId, setLicenseId] = useState('');

    // Simulated function to fetch the session data
    const fetchSession = () => {
        // Replace with actual logic to get the session
        const mockSession = { user: { token: 'mock-token', licenseId: '' } }; // Mock session data
        setSession(mockSession);
        setStatus('authenticated');
        setLicenseId(mockSession.user.licenseId);
    };

    useEffect(() => {
        fetchSession();
    }, []);

    const [loader, setLoader] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            category: '',
            description: '',
            price: '',
            image: null,
        },
        mode: 'onBlur',
    });

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        console.log('File selected:', event.target.files);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Check if reader.result is not empty
                if (reader.result) {
                    setImage(reader.result); // Set base64 image data
                    setPreviewImage(reader.result); // Set preview image URL
                } else {
                    console.error('Error reading file: no result');
                }
            };
            reader.onerror = (error) => {
                console.error('Error reading file:', error);
            };
            reader.readAsDataURL(file); // Read file as data URL
        } else {
            console.error('No file selected');
            setPreviewImage(null); // Clear preview if no file
        }
    }; 
    

    const becomeMerchant = useCallback(async () => {
        if (status === 'authenticated' && session) {
            const response = await fetch('http://localhost:5000/api/client/becomeMerchant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                },
                body: JSON.stringify({
                    licenseId: 'test',
                }),
            });

            const result = await response.json();
            if (result.status === 'success') {
                toast.success('You are a merchant now');
                if (result.licenseId) {
                    setLicenseId(result.licenseId);
                    // Update session or state if necessary
                }
                return true; // Indicate success
            } else {
                toast.error(result.message || 'Unknown error occurred');
                return false; // Indicate failure
            }
        }
        return false; // Indicate failure
    }, [status, session, token]);

    const onSubmitReady = async (data) => {
        try{
            setLoader(true);
            console.log(data)
            // Prepare the form data
            const formData = {
                name: data.name,
                category: data.category,
                description: data.description,
                price: parseFloat(data.price),
                base64Image: image,
            };
            console.log('Base64 Image Data:', image);

            // Submit the product form
            const response = await fetch('http://localhost:5000/api/merchant/addProduct/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result)
            setLoader(false);
            if (result.status === 'failed') {
                toast.error('Failed to create product');
            } else {
                toast.success('Product created successfully');
                reset();
                setPreviewImage(null);
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleFormSubmission = async (data) => {
        try {
            const merchantSuccess = await becomeMerchant();
            if (merchantSuccess) {
                await onSubmitReady(data);
            } else {
                await onSubmitReady(data);
            }
        } catch (error) {
            toast.error('Error during form submission');
                console.error(error);
        }
        
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(handleFormSubmission)} className="form">
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                    className={`input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}

                <select
                    {...register('category', { required: 'Category is required' })}
                    className={`input ${errors.category ? 'error' : ''}`}
                >
                    <option value="" disabled>Choose a category</option>
                    <option value="Food">Food</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Moving">Moving</option>
                </select>
                {errors.category && <span className="error-message">{errors.category.message}</span>}

                <input
                    type="text"
                    placeholder="Description"
                    {...register('description', { required: 'Description is required' })}
                    className={`input ${errors.description ? 'error' : ''}`}
                />
                {errors.description && <span className="error-message">{errors.description.message}</span>}

                <input
                    type="number"
                    placeholder="Price in KES"
                    {...register('price', { required: 'Price is required', valueAsNumber: true })}
                    className={`input ${errors.price ? 'error' : ''}`}
                />
                {errors.price && <span className="error-message">{errors.price.message}</span>}

                <input
                    type="file"
                    className="input"
                    onChange={handleFileChange}
                    {...register('image', { required: 'Image is required' })}
                />
                {errors.image && <span className="error-message">{errors.image.message}</span>}

                {previewImage && (
                    <img
                        className="preview-image"
                        src={previewImage}
                        alt="Product preview"
                    />
                )}

                <div className="form-actions">
                    {loader && <Loader />}
                    <button type="submit" disabled={loader} className="submit-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;

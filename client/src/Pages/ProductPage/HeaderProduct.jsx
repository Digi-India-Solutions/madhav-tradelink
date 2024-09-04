import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const HeaderProduct = () => {
    const [products, setProducts] = useState([]);
    const { name } = useParams();
    const [filterMethod, setFilterMethod] = useState('');

    const handleFetch = async () => {
        try {
            const response = await axios.get('https://api.vigaz.in/api/v1/get-all-product');
            const semiData = response.data.data;
            // console.log(first)
            let rawData;
            if (semiData.some(item => item.subCategoryName === name)) {
                setFilterMethod('Subcategory');
                rawData = semiData.filter(item => item.subCategoryName === name);
                console.log(rawData)
            } else if (semiData.some(item => item.categoryName === name)) {
                setFilterMethod('Category');
                rawData = semiData.filter(item => item.categoryName === name);
                console.log(rawData)

            } else {
                setFilterMethod('None');
                rawData = [];
            }
            setProducts(rawData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, [name]);

    const renderProduct = (item, index) => {
        if (filterMethod === 'Category') {
            return (
                <Link to={`/Category/Subcategory/${item.subCategoryName}`} className="col-md-6" key={index}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Category: {item.productName}</h5>
                            <p className="card-text">{item.productDesc[0]}</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </Link>
            );
        } else if (filterMethod === 'Subcategory') {
            return (
                <div className="col-md-6" key={index}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Subcategory: {item.productName}</h5>
                            <p className="card-text">{item.productDesc[0]}</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container">
            <h1>Products Filtered by: {filterMethod}</h1>
            <div className="row">
                {products.map((item, index) => (
                    renderProduct(item, index)
                ))}
            </div>
        </div>
    );
};

export default HeaderProduct;

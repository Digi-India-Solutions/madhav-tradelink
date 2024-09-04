import React, { useEffect, useState } from 'react';
import DoorCategory from '../../components/DoorCategory/DoorCategory';
import KitchenCateHomePage from '../../components/KitchenCateHomePage/KitchenCateHomePage';
import axios from 'axios';
import LineHead from '../../components/LineHead/LineHead';
import { Link } from 'react-router-dom';

const SubCategoryPage = () => {
    const [categories, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-product');
            // console.log(res.data.data);
            setCategory(res.data.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        handleFetch();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Filter categories based on category name
    const modularKitchenCategory = categories.find(category => category.categoryName === "Modular Kitchen");
    const doorsCategory = categories.find(category => category.categoryName === "Doors");

    return (
        <>
            {modularKitchenCategory && <KitchenCateHomePage key={modularKitchenCategory._id} />}
            {doorsCategory && <DoorCategory key={doorsCategory._id} />}
            {categories.map(category => {
                if (category.categoryName !== "Modular Kitchen" && category.categoryName !== "Doors" && category.subCategoryName) {
                    return (
                        <>
                            <section className='doorCategory' key={category._id}>
                                <div className="container">
                                    <LineHead title={category.categoryName} />

                                    <div className="grid-4">
                                        <div className="single-door">
                                            <Link 
                                                to={category.AgainSubCategoryName ? `/AgainSub/${category.categoryName}/${category.subCategoryName}` : `/product/${category.categoryName}/${category.subCategoryName}`}
                                                className="head"
                                            >
                                                <h4>{category.subCategoryName}</h4>
                                            </Link>
                                            <p>{category.subCategoryDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </>

                    );
                }
                return null;
            })}
        </>
    );
};

export default SubCategoryPage;

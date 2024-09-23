import React, { useEffect, useState } from 'react';
import DoorCategory from '../../components/DoorCategory/DoorCategory';
import KitchenCateHomePage from '../../components/KitchenCateHomePage/KitchenCateHomePage';
import axios from 'axios';
import LineHead from '../../components/LineHead/LineHead';
import { Link } from 'react-router-dom';

const SubCategoryPage = () => {
    const [categories, setCategory] = useState([]);
    const [SubCategories, setSubCategory] = useState([]);
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
    const handleFetchSubCategory = async () => {
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-subcategory');
            // console.log(res.data.data);
            setSubCategory(res.data.data);
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
        handleFetchSubCategory();
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


    // Group categories by categoryName
    const groupedCategories = categories.reduce((acc, category) => {
        if (category.categoryName !== "Modular Kitchen" && category.categoryName !== "Doors" && category.subCategoryName) {
            if (!acc[category.categoryName]) {
                acc[category.categoryName] = [];
            }
            acc[category.categoryName].push(category);
        }
        return acc;
    }, {});

    return (
        <>
            {modularKitchenCategory && <KitchenCateHomePage key={modularKitchenCategory._id} />}
            {doorsCategory && <DoorCategory key={doorsCategory._id} />}

            {Object.keys(groupedCategories).map(categoryName => (
                <section className='doorCategory' key={groupedCategories[categoryName][0]._id}>
                    <div className="container">
                        <LineHead title={categoryName} />
                        <div className="grid-4">
                            {groupedCategories[categoryName].map(category => (
                                <div className="single-door" key={category._id}>
                                    <Link
                                        to={category.AgainSubCategoryName ? `/AgainSub/${category.categoryName}/${category.subCategoryName}` : `/product/${category.categoryName}/${category.subCategoryName}`}
                                        className="head"
                                    >
                                        {SubCategories.filter(subCat => subCat.categoryName === category.categoryName && subCat.subCategoryName === category.subCategoryName)
                                            .map(matchedSubCategory => (
                                                <div key={matchedSubCategory._id}>
                                                    <img src={matchedSubCategory.subCategoryImg} alt={matchedSubCategory.subCategoryName} />
                                                </div>
                                            ))
                                        }
                                        <h4>{category.subCategoryName}</h4>
                                    </Link>
                                    {SubCategories.filter(subCat => subCat.categoryName === category.categoryName && subCat.subCategoryName === category.subCategoryName)
                                        .map(matchedSubCategory => (
                                            <div key={matchedSubCategory._id}>
                                                <p>
                                                    {matchedSubCategory.subCategoryDesc.split(' ').slice(0, 10).join(' ') + (matchedSubCategory.subCategoryDesc.split(' ').length > 10 ? '...' : '')}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default SubCategoryPage;

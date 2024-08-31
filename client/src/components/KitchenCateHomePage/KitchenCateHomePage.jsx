import React, { useEffect, useState } from 'react'
import './KitchenCateHomePage.css'
import LineHead from '../LineHead/LineHead'
import kitchenIcon from '../Assets/kitchen-icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const KitchenCateHomePage = () => {
    // const [kitchenCategory,setkitchenCategory] = useState([]);
    // const handleFetch = async()=>{
    //     try {
    //         const res = await axios.get('http://localhost:6519/api/v1/get-all-subcategory')
    //         console.log(res.data.data)

    //         const filterKitchenCate = res.data.data.filter((item)=> item.categoryName === "Modular Kitchen");
    //         console.log(filterKitchenCate)
    //         setkitchenCategory(filterKitchenCate)
    //     } catch (error) { 
    //         console.error(error);
    //     }
    // }

    const [kitchenCategory, setKitchenCategory] = useState([]);

    const handleFetch = async () => {
        try {
            // Fetch data from the first endpoint
            const res = await axios.get('http://localhost:6519/api/v1/get-all-subcategory');
            // console.log(res.data.data);

            // Fetch data from the second endpoint
            const innerResponse = await axios.get('http://localhost:6519/api/v1/get-all-inner-subcategory');
            // console.log(innerResponse.data.data);

            // Merge the data from both responses
            const mergedData = res.data.data.map(item => {
                const innerSubCategory = innerResponse.data.data.find(innerItem => innerItem.categoryName === item.categoryName && innerItem.subCategoryName === item.subCategoryName);
                if (innerSubCategory) {
                    return {
                        ...item,
                        AgainSubCategoryName: innerSubCategory.AgainSubCategoryName,
                        againSubCategoryImg: innerSubCategory.againSubCategoryImg,
                        againSubCategoryDesc: innerSubCategory.againSubCategoryDesc
                    };
                } else {
                    return item;
                }
            });

            setKitchenCategory(mergedData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    }, [])
    return (
        <>
            <section className='kitchenCate'>
                <div className="container my-5">
                    {/* Assuming LineHead component is correctly defined */}
                    <LineHead title="Types Of Kitchens" />

                    <div className="grid-4">
                        {kitchenCategory && kitchenCategory.map((item, index) => (
                            // Ensure that the condition is structured correctly
                            item.categoryName === 'Modular Kitchen' && (
                                <Link 
                                key={index}
                                to={item.AgainSubCategoryName ? `/AgainSub/${item.categoryName}/${item.subCategoryName}` : `/product/${item.categoryName}/${item.subCategoryName}`}
                                className="single-kitch" 
                                >
                                    <div className="head">
                                        <h4>{item.subCategoryName}</h4>
                                        {/* Assuming kitchenIcon is defined */}
                                        <img src={kitchenIcon} alt="kitchen-icon" />
                                    </div>
                                    <p className='desc'>{item.subCategoryDesc}</p>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default KitchenCateHomePage
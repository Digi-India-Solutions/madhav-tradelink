import React, { useEffect, useState } from 'react'
import './DoorCategory.css'
import LineHead from '../LineHead/LineHead'
import doorIcon from '../Assets/door-icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DoorCategory = () => {
    // const [doorCategory,setDoorCate] = useState([]);
    // const [innerSubcate,setInnerSubCate] = useState([]);
    // const handleFetch = async()=>{
    //     try {
    //         const res = await axios.get('https://api.vigaz.in/api/v1/get-all-subcategory')
    //         // console.log(res.data.data)

    //         const filterDoorCate = res.data.data.filter((item)=> item.categoryName === "Doors");
    //         console.log(filterDoorCate)

    //         const innerResponse = await axios.get('https://api.vigaz.in/api/v1/get-all-inner-subcategory');

    //         // filterDoorCate.map((filtercat)=>(
    //         //     filtercat === 
    //         // ))

    //         setDoorCate(filterDoorCate)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const [kitchenCategory, setKitchenCategory] = useState([]);

    const handleFetch = async () => {
        try {
            // Fetch data from the first endpoint
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-subcategory');
            // console.log(res.data.data);

            // Fetch data from the second endpoint
            const innerResponse = await axios.get('https://api.vigaz.in/api/v1/get-all-inner-subcategory');
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
            {/* {console.log(kitchenCategory)} */}
            <section className='doorCategory'>
                <div className="container">
                    <LineHead title="Doors" />

                    <div className="grid-4">
                        {kitchenCategory && kitchenCategory.map((item, index) => (
                            item.categoryName === 'Doors' && (
                                <div className="single-door" key={index}>
                                    <Link 
                                        // to={`/product/${item.categoryName}/${item.subCategoryName}`} className="head"
                                        to={item.AgainSubCategoryName ? `/AgainSub/${item.categoryName}/${item.subCategoryName}` : `/product/${item.categoryName}/${item.subCategoryName}`}
                                        className="head"
                                        key={item._id}
                                    >
                                        <img src={doorIcon} alt="door-icon" />
                                        <h4>{item.subCategoryName}</h4>
                                    </Link>
                                    <p>{item.subCategoryDesc}</p>
                                </div>
                            )
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}

export default DoorCategory
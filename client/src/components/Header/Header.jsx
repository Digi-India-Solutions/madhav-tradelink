import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    // State to track whether each dropdown is open or closed
    const [dropdownOpen, setDropdownOpen] = useState({
        doors: false,
        // pages: false
    });

    // Function to toggle the dropdown state
    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };


    const [isMobModeActive, setIsMobModeActive] = useState(false)

    const activeMobMode = () => {
        setIsMobModeActive(!isMobModeActive)
    }

    const deActiveMobMode = () => {
        setIsMobModeActive(false)
    }

    const [allcate, setAllCate] = useState([]);
    const [singleCategory, setSingleCategory] = useState([]);

    const handleFetch = async () => {
        try {
            const res = await axios.get('http://localhost:6519/api/v1/get-all-product');
            console.log(res.data.data);
            setAllCate(res.data.data);

            const filterSingleCate = res.data.data.filter(item =>
                (!item.subCategoryName && !item.AgainSubCategoryName) // Check for null or undefined
            );
            console.log(filterSingleCate);
            setSingleCategory(filterSingleCate);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    }, [])

    const handleToggle = (event) => {
        event.preventDefault();
        const parent = event.target.closest('li');
        parent.classList.toggle('open');
    };
    return (
        <>
            <header>
                <div className="top-black-line">Welcome to Vigaz</div>
                <div className="header-middle container">
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <Link to="/contact-us" className="contact-btn">
                        Request a Quote <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="hamburger" onClick={activeMobMode}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                <nav class="main-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        {allcate && allcate.reduce((acc, navItem) => {
                            // Find if the category already exists in the accumulator
                            let category = acc.find(item => item.categoryName === navItem.categoryName);

                            // If category doesn't exist, create it
                            if (!category) {
                                category = {
                                    categoryName: navItem.categoryName,
                                    subCategories: []
                                };
                                acc.push(category);
                            }

                            // If subCategoryName exists, find or create it
                            if (navItem.subCategoryName) {
                                let subCategory = category.subCategories.find(sub => sub.subCategoryName === navItem.subCategoryName);
                                if (!subCategory) {
                                    subCategory = {
                                        subCategoryName: navItem.subCategoryName,
                                        againSubCategories: []
                                    };
                                    category.subCategories.push(subCategory);
                                }

                                // If AgainSubCategoryName exists, add it
                                if (navItem.AgainSubCategoryName) {
                                    let againSubCategory = subCategory.againSubCategories.find(againSub => againSub === navItem.AgainSubCategoryName);
                                    if (!againSubCategory) {
                                        subCategory.againSubCategories.push(navItem.AgainSubCategoryName);
                                    }
                                }
                            }

                            return acc;
                        }, []).filter(category => category.subCategories.length > 0).map((category, categoryIndex) => (
                            <li key={categoryIndex} className="menu-item-has-children">
                                <Link to={category.subCategories.length ? `#` : `/Category/${category.categoryName}`}>{category.categoryName}</Link>
                                {category.subCategories.length > 0 && (
                                    <ul className="sub-menu">
                                        {category.subCategories.map((subCategory, subCategoryIndex) => (
                                            <li key={subCategoryIndex} className="menu-item-has-children">
                                                <Link to={subCategory.againSubCategories.length ? `/AgainSub/${category.categoryName}/${subCategory.subCategoryName}` : `/product/${category.categoryName}/${subCategory.subCategoryName}`}>{subCategory.subCategoryName}</Link>
                                                {subCategory.againSubCategories.length > 0 && (
                                                    <ul className="sub-menu">
                                                        {subCategory.againSubCategories.map((againSubCategory, againSubCategoryIndex) => (
                                                            <li key={againSubCategoryIndex}>
                                                                <Link to={`/product/${category.categoryName}/${subCategory.subCategoryName}/${againSubCategory}`}>
                                                                    {againSubCategory}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}



                        {singleCategory && singleCategory.map((cate, ind) => (
                            <li key={ind}><Link to={`/Category/${cate.productName}`}>{cate.categoryName}</Link></li>
                        ))}
                        <li><Link to="/contact-us">Contact</Link></li>
                    </ul>
                </nav>

            </header>

            <div className="side-nav">
                <div className={`mob-nav p-2 ${isMobModeActive ? 'mob-active' : ''}`}>
                    <div className="menu-close">
                        <i className="fa-solid fa-xmark" onClick={deActiveMobMode}></i>
                    </div>
                    <ul className="list-unstyled">
                        <li><Link to="/" onClick={deActiveMobMode}>home</Link></li>
                        <li><Link to="/about-us" onClick={deActiveMobMode}>about us</Link></li>

                        {allcate && allcate.reduce((acc, navItem) => {
                            // Find if the category already exists in the accumulator
                            let category = acc.find(item => item.categoryName === navItem.categoryName);

                            // If category doesn't exist, create it
                            if (!category) {
                                category = {
                                    categoryName: navItem.categoryName,
                                    subCategories: []
                                };
                                acc.push(category);
                            }

                            // If subCategoryName exists, find or create it
                            if (navItem.subCategoryName) {
                                let subCategory = category.subCategories.find(sub => sub.subCategoryName === navItem.subCategoryName);
                                if (!subCategory) {
                                    subCategory = {
                                        subCategoryName: navItem.subCategoryName,
                                        againSubCategories: []
                                    };
                                    category.subCategories.push(subCategory);
                                }

                                // If AgainSubCategoryName exists, add it
                                if (navItem.AgainSubCategoryName) {
                                    let againSubCategory = subCategory.againSubCategories.find(againSub => againSub === navItem.AgainSubCategoryName);
                                    if (!againSubCategory) {
                                        subCategory.againSubCategories.push(navItem.AgainSubCategoryName);
                                    }
                                }
                            }

                            return acc;
                        }, []).filter(category => category.subCategories.length > 0).map((category, categoryIndex) => (
                            <li key={categoryIndex} className="menu-item-has-children">
                                <Link to={category.subCategories.length ? `#` : `/Category/${category.categoryName}`} onClick={category.subCategories.length ? handleToggle : deActiveMobMode}>
                                    {category.categoryName}
                                </Link>
                                {category.subCategories.length > 0 && (
                                    <ul className="sub-menu">
                                        {category.subCategories.map((subCategory, subCategoryIndex) => (
                                            <li key={subCategoryIndex} className="menu-item-has-children">
                                                <Link to={subCategory.againSubCategories.length ? `/AgainSub/${category.categoryName}/${subCategory.subCategoryName}` : `/product/${category.categoryName}/${subCategory.subCategoryName}`} onClick={subCategory.againSubCategories.length ? handleToggle : deActiveMobMode}>
                                                    {subCategory.subCategoryName}
                                                </Link>
                                                {subCategory.againSubCategories.length > 0 && (
                                                    <ul className="sub-menu">
                                                        {subCategory.againSubCategories.map((againSubCategory, againSubCategoryIndex) => (
                                                            <li key={againSubCategoryIndex}>
                                                                <Link to={`/product/${category.categoryName}/${subCategory.subCategoryName}/${againSubCategory}`} onClick={deActiveMobMode}>
                                                                    {againSubCategory}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}


                        {singleCategory && singleCategory.map((cate, ind) => (
                            <li key={ind}><Link to={`/Category/${cate.productName}`} onClick={deActiveMobMode}>{cate.categoryName}</Link></li>
                        ))}
                        <li><Link to="/contact-us" onClick={deActiveMobMode}>Contact</Link></li>
                    </ul>
                    <div className="social-icons mt-4">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            {/* <!-- ----------Whatsapp---------- --> */}
            <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank" className="whatsapp_float"><i className="fa-brands fa-whatsapp whatsapp-icon"></i></a>
        </>
    )
}

export default Header
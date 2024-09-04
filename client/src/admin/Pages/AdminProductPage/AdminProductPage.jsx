import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const AdminProductPage = () => {
    const [products, setproduct] = useState([]);

    const handleFetch = async () => {
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-product');
            const reverseData = res.data.data.reverse()
            setproduct(reverseData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleFetch();
    }, [])
    const hadndleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`https://api.vigaz.in/api/v1/delete-product/${id}`);
                    console.log(res.data);
                    toast.success("Product Deleted Successfully");
                    handleFetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(error.response.data.message);
                }
            }
        });

    }
    // console.log(products)
    return (
        <>
            <ToastContainer />
            <section className="breadCmb">
                <div>
                    <h2>Our Products</h2>
                    <ul>
                        <li><Link to="/admin/dashboard">Home / </Link></li>
                        <li>Our Products</li>
                    </ul>
                </div>
                <div className="btn1">
                    <Link to={'/create-product'} >Create Product </Link>
                </div>
            </section>

            <section className="tables">
                <div className="container overflow-auto">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Sub Category</th>
                                    <th scope="col">Inner Sub Category</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Images</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {products && products.reverse().map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.categoryName}</td>
                                        <td>{item.subCategoryName}</td>
                                        <td>{item.AgainSubCategoryName}</td>
                                        <td>{item.productName}</td>
                                        <td>
                                            {item.productImage.slice(0,4).map((image, idx) => (
                                                image && <img key={idx} src={image} alt={`Product-image-${idx}`} style={{ marginRight: '10px', width: '50px' }} />
                                            ))}
                                        </td>
                                        <td className="upd-btns">
                                            <Link to={`/edit-product/${item._id}`} className="upd-btns update"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={() => hadndleDelete(item._id)} className="upd-btns delete"><i className="fa-solid fa-trash-arrow-up"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminProductPage
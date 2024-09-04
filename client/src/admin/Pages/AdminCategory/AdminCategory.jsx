import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const AdminCategory = () => {
    const [categories,setCategory] = useState([]);

    const handleFetch = async()=>{
        try {
            const res = await axios.get('https://api.vigaz.in/api/v1/get-all-category');
            const reverseData = res.data.data.reverse();
            setCategory(reverseData)
            // console.log(categories)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        handleFetch();
    },[])
    const hadndleDelete = async (id)=>{
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
                    const res = await axios.delete(`https://api.vigaz.in/api/v1/delete-category/${id}`);
                    console.log(res.data);
                    toast.success("Category Deleted Successfully");
                    handleFetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Category has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(error.response.data.message);
                }
            }
        });
    }
    return (
        <>
        <ToastContainer />
            <section className="breadCmb">
                <div>
                    <h2>Our Category</h2>
                    <ul>
                        <li><Link to="/admin/dashboard">Home / </Link></li>
                        <li>Our Categories</li>
                    </ul>
                </div>
                <div className="btn1">
                    <Link to={'/create-category'}> Create Category </Link>
                </div>
            </section>

            <section className="tables">
                <div className="container overflow-auto">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories.reverse().map((item,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.categoryName}</td>
                                        <td className='upd-btns'>
                                            <Link to={`/edit-category/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={()=>{hadndleDelete(item._id)}} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
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

export default AdminCategory
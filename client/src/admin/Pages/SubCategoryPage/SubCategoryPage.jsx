import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';

const SubCategoryPage = () => {
    const [subCategory,setSubCategory] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 2; // Change this value according to your preference

    const handleFetch = async ()=>{
        try {
            const res = await axios.get("https://api.vigaz.in/api/v1/get-all-subcategory");
            setSubCategory(res.data.data);
            console.log(subCategory)
        } catch (error) {
            console.error(error)
        }
    }

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
                    const res = await axios.delete(`https://api.vigaz.in/api/v1/delete-subcategory/${id}`);
                    console.log(res.data);
                    toast.success("SubCategory Deleted Successfully");
                    handleFetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your SubCategory has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(error.response.data.message);
                }
            }
        });
    }

    useEffect(() => {
        handleFetch();
    }, [pageNumber]);

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };
  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Our Sub Category</h2>
                <ul>
                    <li><Link to="/admin/dashboard">Home / </Link></li>
                    <li>Our Sub Categories</li>
                </ul>
            </div>
            <div className="btn1">
                <Link to={'/create-sub-category'} >Create Sub Category </Link>
            </div>
        </section>

        <section className="tables">
            <div className="container overflow-auto">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Sub Category Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Desc</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subCategory && subCategory.reverse().map((item,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.subCategoryName}</td>
                                    <td><img src={item.subCategoryImg} alt="Category-image" /></td>
                                    <td>{item.subCategoryDesc}</td>
                                    <td className='upd-btns'>
                                        <Link to={`/edit-sub-category/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>{hadndleDelete(item._id)}} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(subCategory.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    </>
  )
}

export default SubCategoryPage
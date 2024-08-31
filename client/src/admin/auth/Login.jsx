import React, { useState } from 'react';
import './Login.css'; // Assuming you'll add custom styles here

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const Email = "admin@gmail.com";
        const Password = "1";

        if (formData.email === "" || formData.password === "") {
            setErrorMessage("Please fill in both fields.");
            return;
        }

        if (formData.email === Email && formData.password === Password) {
            setErrorMessage(""); // Clear any previous error message
            alert("Login Success");
            sessionStorage.setItem('admin', true); // Storing login status
            window.location.href = "/admin/dashboard";
        } else {
            setErrorMessage("Incorrect email or password.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrorMessage(""); // Clear error message when user starts typing
    };

    return (
        <div className="login-container my-5">
            <div className="row ">
                <div className="col-md-6 col-lg-4 mx-auto">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Admin Login</h2>
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        name='email'
                                        className='form-control'
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter Password'
                                    />
                                </div>
                                <div className="text-center">
                                    <button className='btn btn-primary btn-block' type='submit'>LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React from 'react'

import { Helmet } from "react-helmet";
const HelmentContext = ({ title, description , keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="author" content="Rohit Patel" />
            <meta name="email" content="vigazwood@gmail.com" />
            <meta name="profile" content="Madhav Tradelink" />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    ) 
}

export default HelmentContext
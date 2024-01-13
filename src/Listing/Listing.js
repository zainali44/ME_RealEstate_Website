// React component
import React, { useEffect } from 'react';

// eslint-disable-next-line import/no-webpack-loader-syntax
const myHtmlContent = require('html-loader!./Test.html').default;

const Listing = () => {
    useEffect(() => {
        document.title = 'Listing';
    });

    return (
        <div className="container mx-auto px-4 mt-8">
            <div className="text-center">
                <h1 className="font-bold uppercase text-2xl mb-4 text-gray-800">Listing Page</h1>
                <p className="text-sm text-gray-600 subpixel-antialiased font-family-sans">
                    This page is for listing. You can search and filter the listing here along with
                    pagination.
                </p>
            </div>
            <div className="my-8" dangerouslySetInnerHTML={{ __html: myHtmlContent }} />
        </div>
    );
};

export default Listing;

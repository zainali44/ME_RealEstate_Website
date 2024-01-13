import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WordPressPage = () => {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    // Replace 'your-wordpress-site' and 'your-page-slug' with your actual WordPress site and page slug
    const apiUrl = 'https://mereig.rent/listings/';

    axios.get(apiUrl)
      .then(response => {
        // Assuming the content is stored in the 'content.rendered' property of the response
        setPageContent(response.data[0].content.rendered);
      })
      .catch(error => {
        console.error('Error fetching WordPress page:', error);
      });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: pageContent }} />
  );
};

export default WordPressPage;

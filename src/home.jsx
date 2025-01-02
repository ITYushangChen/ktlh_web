import React from 'react';
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "/images/company_2.jpg",
      thumbnail: "/images/company_2.jpg",
  
    },
    {
      original: "/images/company_3.jpg",
      thumbnail: "/images/company_3.jpg",
    },
    {
      original: "/images/slogen.jpg",
      thumbnail: "/images/slogen.jpg",
    },
  ];
  
const Home = () => {
    return (
        <div className="main">
          <div className="gallery">
            <ImageGallery items={images} />
          </div>
          <div><span className ="h-content">心选精品</span></div>
          <div className="content">
    
          </div>
        </div>
    );
};

export default Home;
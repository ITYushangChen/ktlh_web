import React from 'react';
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "company_2.jpg",
      thumbnail: "company_2.jpg",
  
    },
    {
      original: "company_3.jpg",
      thumbnail: "company_3.jpg",
    },
    {
      original: "slogen.jpg",
      thumbnail: "slogen.jpg",
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
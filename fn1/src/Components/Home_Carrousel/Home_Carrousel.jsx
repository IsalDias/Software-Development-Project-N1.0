import React from 'react';
// import './home_Carrouel.css';
import { Carousel } from '3d-react-carousal';
import image1 from '../Assests/event_banner_1.jpg';
import image2 from '../Assests/event_banner_2.jpg';
import image3 from '../Assests/event_banner_3.jpg';
import image4 from '../Assests/event_banner_1.jpg';
import image5 from '../Assests/event_banner_2.jpg';

const CoreComments = () => {
  let slides = [
    {
      image: image1,
      width: '10px',
    },
    {
      image: image2,
      width: '100px',
    },
    {
      image: image3,
      width: '100px',
    },
    {
      image: image4,
      width: '100px',
    },
    {
      image: image5,
      width: '100px',
    },
  ];

  return (
    <div className='carouselcards'>
      <p style={{ color: 'white', fontWeight: 'normal', fontSize: '30px', padding: '3% 10%' }}>
        <b> Get touch with eventease </b>
        <br />
        sdkjssssssw ss s sssawddaldlskjal <br />
      </p>
      <div className="previousbtn"></div>
      <div className="nextbtn"></div>
      <Carousel
        slides={slides.map((slide, index) => (
          <div key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="slide-para">
                <p>{slide.paragraph}</p>
                <h3>{slide.title}</h3>
                <span>{slide.subtitle}</span>
              </div>
            </div>
          </div>
        ))}
        autoplay={true} // Set autoplay to true
        interval={4000}
      />
    </div>
  );
};

export default CoreComments;

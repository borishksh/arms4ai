import React, { useRef } from 'react';
import { goToPrevious, goToNext } from '../helpers/CarousalSlider';

export default function Carosal() {
  const carouselRef = useRef(null);
  var i = 0;

  const handleGoToPrevious = () => {
    goToPrevious(carouselRef);
    if(i===1){
      document.getElementById("carosal-img1").classList.add('show')
      document.getElementById("carosal-img2").classList.remove('show')
      document.getElementById("carosal-img3").classList.remove('show')
      i--;
      return;
    }
    if(i===2){
      document.getElementById("carosal-img1").classList.remove('show')
      document.getElementById("carosal-img2").classList.add('show')
      document.getElementById("carosal-img3").classList.remove('show')
      i--;
    }
  };

  const handleGoToNext = () => {
    goToNext(carouselRef);
    if(i===0){
      document.getElementById("carosal-img1").classList.remove('show')
      document.getElementById("carosal-img2").classList.add('show')
      document.getElementById("carosal-img3").classList.remove('show')
      i++;
      return;
    }
    if(i===1){
      document.getElementById("carosal-img1").classList.remove('show')
      document.getElementById("carosal-img2").classList.remove('show')
      document.getElementById("carosal-img3").classList.add('show')
      i++;
    }
  };

  return (
    <div className="carosal">
        <div className='carosal-holder'>
          <div className='carosal-left' ref={carouselRef}>
            <CarouselItem
              index='01'
              title='Geospatial Modeling and Analysis'
              details='Our platform leverages cutting-edge geospatial modeling and analysis techniques to process and extract insights from satellite image data. With advanced geospatial technology, we enable accurate and efficient processing of satellite imagery, allowing us to extract meaningful information and insights for various applications.'
              handleGoToPrevious={handleGoToPrevious}
              handleGoToNext={handleGoToNext}
            />
            <CarouselItem
              index='02'
              title='Computer Vision for High-Resolution Satellite Images'
              details='We utilize state-of-the-art computer vision techniques to extract features from high-resolution satellite images. Our advanced algorithms and image processing capabilities enable us to derive actionable insights from satellite imagery, including object detection, image classification, and change detection, among others.'
              handleGoToPrevious={handleGoToPrevious}
              handleGoToNext={handleGoToNext}
            />
            <CarouselItem
              index='03'
              title='Machine Learning for Prediction and Model Training'
              details='Our platform leverages cutting-edge machine learning techniques to process and extract insights from satellite image data. With advanced machine learning technology, we enable accurate prediction and model training, allowing us to extract meaningful information and insights for various applications.'
              handleGoToPrevious={handleGoToPrevious}
              handleGoToNext={handleGoToNext}
            />
          </div>
          <div className='carosal-right'>
            <div id="carosal-img1" className='show'>

            </div>
            <div id="carosal-img2">

            </div>
            <div id="carosal-img3">

            </div>
          </div>
      </div>
      <div className='slider' id='home-slider'>
              <div onClick={handleGoToPrevious}>❰</div>
              <div onClick={handleGoToNext}>❱</div>
          </div>
    </div>
  );
};

const CarouselItem = ({ index, title, details, handleGoToPrevious, handleGoToNext}) => {
  return (
        <div className='carousal-text'><font className='carosal-index'>{index}</font><font className='carosal-title'>{title}</font><font className='carosal-details'>{details}</font>
    </div>
  );
};

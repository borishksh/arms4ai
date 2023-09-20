import React from 'react';
import rect1 from '../assets/Rectangle 25.png';
import rect2 from '../assets/Rectangle 24.png';
import rect3 from '../assets/Rectangle 26.png';

export default function Carosal() {
  var i = 0;

  const handleGoToPrevious = () => {
    if(i===1){
      document.getElementById("carosal-img1").classList.add('show')
      document.getElementById("carosal-img2").classList.remove('show')
      document.getElementById("carosal-img3").classList.remove('show')
      document.getElementById("carosal-img11").classList.add('show')
      document.getElementById("carosal-img21").classList.remove('show')
      document.getElementById("carosal-img31").classList.remove('show')
      document.getElementById("carousal-text1").classList.add('show')
      document.getElementById("carousal-text2").classList.remove('show')
      document.getElementById("carousal-text3").classList.remove('show')
      i--;
      return;
    }
    if(i===2){
      document.getElementById("carosal-img1").classList.remove('show')
      document.getElementById("carosal-img2").classList.add('show')
      document.getElementById("carosal-img3").classList.remove('show')
      document.getElementById("carosal-img11").classList.remove('show')
      document.getElementById("carosal-img21").classList.add('show')
      document.getElementById("carosal-img31").classList.remove('show')
      document.getElementById("carousal-text1").classList.remove('show')
      document.getElementById("carousal-text2").classList.add('show')
      document.getElementById("carousal-text3").classList.remove('show')
      i--;
    }
  };

  const handleGoToNext = () => {
    if(i===0){
      document.getElementById("carosal-img1").classList.remove('show')
      document.getElementById("carosal-img2").classList.add('show')
      document.getElementById("carosal-img3").classList.remove('show')
      document.getElementById("carosal-img11").classList.remove('show')
      document.getElementById("carosal-img21").classList.add('show')
      document.getElementById("carosal-img31").classList.remove('show')
      document.getElementById("carousal-text1").classList.remove('show')
      document.getElementById("carousal-text2").classList.add('show')
      document.getElementById("carousal-text3").classList.remove('show')
      i++;
      return;
    }
    if(i===1){
      document.getElementById("carosal-img1").classList.remove('show')
      document.getElementById("carosal-img2").classList.remove('show')
      document.getElementById("carosal-img3").classList.add('show')
      document.getElementById("carosal-img11").classList.remove('show')
      document.getElementById("carosal-img21").classList.remove('show')
      document.getElementById("carosal-img31").classList.add('show')
      document.getElementById("carousal-text1").classList.remove('show')
      document.getElementById("carousal-text2").classList.remove('show')
      document.getElementById("carousal-text3").classList.add('show')
      i++;
    }
  };

  return (
    <div className="carosal">
      <font style={{ color: '#03085D', fontWeight: 900, fontSize: 30}}>Technology</font>
        <div className='carosal-holder'>
        <div className='carosal-right-small'>
            <div id="carosal-img11" className='show'>
                <img src={rect1} alt=''/>
            </div>
            <div id="carosal-img21">
                <img src={rect2} alt=''/>
            </div>
            <div id="carosal-img31">
                <img src={rect3} alt=''/>
            </div>
        </div>
          <div className='carosal-left'>
            <div id="carousal-text1" className='caroual-text show'>
            <CarouselItem
              index='01'
              title='Geospatial Modeling and Analysis'
              details='Our platform leverages cutting-edge geospatial modeling and analysis techniques to process and extract insights from satellite image data. With advanced geospatial technology, we enable accurate and efficient processing of satellite imagery, allowing us to extract meaningful information and insights for various applications.'
              handleGoToPrevious={handleGoToPrevious}
              handleGoToNext={handleGoToNext}
            />
            </div>
            <div id="carousal-text2" className='caroual-text'>
            <CarouselItem
              index='02'
              title='Computer Vision for High-Resolution Satellite Images'
              details='We utilize state-of-the-art computer vision techniques to extract features from high-resolution satellite images. Our advanced algorithms and image processing capabilities enable us to derive actionable insights from satellite imagery, including object detection, image classification, and change detection, among others.'
              handleGoToPrevious={handleGoToPrevious}
              handleGoToNext={handleGoToNext}
            />
            </div>
            <div id="carousal-text3" className='caroual-text'>
            <CarouselItem
              index='03'
              title='Machine Learning for Prediction and Model Training'
              details='Our platform leverages cutting-edge machine learning techniques to process and extract insights from satellite image data. With advanced machine learning technology, we enable accurate prediction and model training, allowing us to extract meaningful information and insights for various applications.'
              handleGoToPrevious={handleGoToPrevious}
              handleGoToNext={handleGoToNext}
            />
            </div>
          </div>
          <div className='carosal-right'>
            <div id="carosal-img1" className='show'>
                <img src={rect1} alt=''/>
            </div>
            <div id="carosal-img2">
                <img src={rect2} alt=''/>
            </div>
            <div id="carosal-img3">
                <img src={rect3} alt=''/>
            </div>
          </div>
      </div>
      <div className='slider-holder'>
        <div className='slider' id='home-slider'>
            <div onClick={handleGoToPrevious}>❰</div>
            <div onClick={handleGoToNext}>❱</div>
        </div>
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

import React, {Component} from 'react'
import image1 from '../assets/Frame691.png';
import image2 from '../assets/Group53.png';
import image3 from '../assets/Group54.png';
import image4 from '../assets/Group55.png';
import ProductList from '../components/ProductList';

export default class Product extends Component {

  componentDidMount() {
    var img1 = document.getElementById('about-img1');
    if(img1!=null) {
      var top = img1.offsetTop;    
      document.addEventListener('scroll', function () {
        if(window.scrollY>0 && window.scrollY-top+200<0) {
          img1.style.width = (60 + (window.scrollY)/20) +'%';
        }
      });
    }
    
  }

  

  render() {

    return (
      <div className='container'>
        <div className='about-hero'>
          <h1>
            Geo - AI Precision Made Simple
          </h1>
          <p className='about-details'>
          Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost, manpower and efforts. Developing Geospatial-AI Platform to prepare, process and analyze satellite images.
          </p>
          <div className='product-stat'>
              <div className='product-stat-item'>
                <img src={image2} alt='arms4ai'/>
                <div>
                  <h4>
                  70%
                  </h4>
                  <p>
                  Reduction in time and effort
                  </p>
                </div>
              </div>
              <div className='product-stat-item'>
                <img src={image3} alt='arms4ai'/>
                <div>
                  <h4>
                  90%
                  </h4>
                  <p>
                  Accuracy Delivered
                  </p>
                </div>
              </div>
              <div className='product-stat-item'>
                <img src={image4} alt='arms4ai'/>
                <div>
                  <h4>
                  15 Mins
                  </h4>
                  <p>
                  or less time to analyze
                  </p>
                </div>
              </div>
          </div>
          <div className='about-hero-img'>
            <img src={image1} alt='arms4ai' id='about-img1'/>
          </div>
        </div>
        
        <ProductList/>
      </div>
    )
  }
}
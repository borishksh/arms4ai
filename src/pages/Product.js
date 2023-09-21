import React, {Component} from 'react'
import image1 from '../assets/Frame691.png';
import img1 from '../assets/chart-pie-alt (7) 1.png';
import img2 from '../assets/gauge-circle-bolt 1.png';
import img3 from '../assets/data-transfer 1.png';
import img4 from '../assets/hand-holding-water 1.png';
import ProductList from '../components/ProductList';
import elipse1 from '../assets/Ellipse 58.png';
import elipse2 from '../assets/Ellipse 59 (1).png';


export default class Product extends Component {

  componentDidMount() {
    var img1 = document.getElementById('about-img1');
    if (img1 !== null) {
      document.addEventListener('scroll', function () {
        if (window.scrollY > 300 && window.scrollY < 1100) {
          const newWidth = 60 + (window.scrollY) / 25;
          img1.style.width = newWidth + '%';
        }
      });
    }
  }

  

  render() {

    return (
      <><div className='container'  style={{ backgroundColor : '#0e1012', marginTop: '-300px',paddingTop: '350px', position: 'relative'}}>
        <div className='about-hero'>
          <h1 style={{position: 'relative', zIndex: '3', textAlign: 'center', width: '100%'}}>
            Transform Imagery, Elevate Insights<br/> One click excellence with <font className='text-gradient-heading'>90% Accuracy</font>”
          </h1>
          <div className='product-stat small-state' style={{ margin: '200px auto 0px auto', justifyContent: 'space-around' }}>
            <div className='product-stat-item'>
              <img src={img1} alt='arms4ai' style={{ height: '50px', width: '50px' }} />
              <div>
                <h5 style={{WebkitTextStroke: '0.5px', marginBottom: '10px' }}>
                  Holistic Solutions
                </h5>
                <p style={{fontWeight: '100', fontSize: '10px' }}>
                  Analyse AI provides comprehensive analytics tools<br/> tailored to each domain's unique challenges,<br/> ensuring accurate and relevant results.
                </p>
              </div>
            </div>
            <div className='product-stat-item'>
              <img src={img2} alt='arms4ai' style={{ height: '50px', width: '50px' }} />
              <div>
                <h5 style={{ WebkitTextStroke: '0.5px', marginBottom: '10px' }}>
                  Precision & Efficiency
                </h5>
                <p style={{fontWeight: '100', fontSize: '10px' }}>
                  Benefit from domain-specific algorithms and <br/>AI-driven analytics for precise, time-efficient, <br/>and cost-effective outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className='product-stat small-state' style={{ marginLeft:-20, justifyContent: 'space-around' }}>
            <div className='product-stat-item'>
              <img src={img3} alt='arms4ai' style={{ height: '50px', width: '50px' }} />
              <div>
                <h5 style={{ WebkitTextStroke: '0.5px', marginBottom: '10px' }}>
                  Data-Driven Decision-Making
                </h5>
                <p style={{ fontWeight: '100', fontSize: '10px' }}>
                  Harness the power of data to make informed <br/>decisions, optimize processes, and achieve<br/> superior performance across all sectors.
                </p>
              </div>
            </div>
            <div className='product-stat-item' >
              <img src={img4} alt='arms4ai' style={{ height: '50px', width: '50px' }} />
              <div>
                <h5 style={{ WebkitTextStroke: '0.5px', marginBottom: '10px' }}>
                  Sustainable Impact
                </h5>
                <p style={{fontWeight: '100', fontSize: '10px' }}>
                  Contribute to sustainability and resource <br/>conservation by leveraging Analyse AI's<br/> insights for eco-friendly practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='elipse3' style={{height: '1300px'}}>
        <img src={elipse1} alt=''/>
      </div>
      <div className='elipse4' style={{height: '1988px'}}>
        <img src={elipse2} alt=''/>
      </div>
        <div className='container' style={{position: 'relative', zIndex: '3', paddingTop: '200px', paddingBottom: '200px' ,backgroundColor: '#EFEAF4'}}>
          <div className='about-hero'>
            <div className='about-hero-img' style={{display: 'flex', justifyContent: 'center'}}>
              <img src={image1} alt='arms4ai' id='about-img1'/>
            </div> 
          </div>
      </div>
      <ProductList/>
      </>
    )
  }
}
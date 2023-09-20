import React, { useEffect, useRef  } from 'react';
import Carosal from '../components/Carosal';
import group1 from '../assets/Group 3512.png';
import group2 from '../assets/Group 3516.png';
import group3 from '../assets/Group 3517.png';
import group5 from '../assets/images 1.png';
import IntroductionGeo from '../components/IntroductionGeo';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Client from '../components/Client';
import rect1 from '../assets/Rectangle130.png';
import rect2 from '../assets/Rectangle 27.png';
import rect3 from '../assets/Rectangle 28.png';
import rect4 from '../assets/Rectangle 29.png';
import rect5 from '../assets/Rectangle 30.png';
import elipse1 from '../assets/Ellipse 58.png';
import elipse2 from '../assets/Ellipse 59.png';
import elipse3 from '../assets/Ellipse 63.png';
import elipse4 from '../assets/Ellipse 64.png';
import elipse5 from '../assets/Ellipse 65.png';
import vector1 from '../assets/Vector 68.png';
import vector2 from '../assets/Vector 69.png';


export default function Home() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.how-heading');
    hiddenElements.forEach((el) => observer.current.observe(el));
    const hiddenElements2 = document.querySelectorAll('.home-more-detail');
    hiddenElements2.forEach((el) => observer.current.observe(el));
    const hiddenElements3 = document.querySelectorAll('.how-img');
    hiddenElements3.forEach((el) => observer.current.observe(el));
    
    //var tech = document.getElementById('technology');
    //var above1 = document.getElementById('above-carosal1');
    //var above2 = document.getElementById('above-carosal2');
    const hs = document.getElementById("howsub");
    const hh = document.getElementById("howhead");
    const hl = document.getElementById("howlist");
    //var top = tech.offsetTop;
    document.addEventListener('scroll', function () {
      /*if(tech.offsetTop-top>10) {
        above1.style.opacity = '0';
        above2.style.opacity = '0';
        tech.style.fontSize = (40 - (tech.offsetTop-top)*0.03) +'px';
      } else {
        above1.style.opacity = '1';
        above2.style.opacity = '1';
      }*/
      var rect =hs.getBoundingClientRect();
      var isAtTop = rect.top <= 300;
      if(isAtTop){
        hs.classList.add("fade");
      } else {
        hs.classList.remove("fade");
      }

      var rect1 =hh.getBoundingClientRect();
      var rect2 =hl.getBoundingClientRect();
      if(rect1.top<800)
      {
        hh.style.fontSize = '90px';
      }
      if(rect1.top>800)
      {
        hh.style.fontSize = '40px';
      }
      if(rect2.top<400)
      {
        hh.style.fontSize = '50px';
      }
    });

    var list = document.querySelectorAll('.how-list-item');
    var ilist = document.querySelectorAll('.himg');
    document.addEventListener('scroll', function () {
      if(ilist.length >=3 ){
        list.forEach((item, index) => {
          const isActive = item.offsetTop <= window.scrollY + (window.innerWidth / 3);
          item.classList.toggle('active', isActive);
          ilist[index].classList.toggle('active', isActive);
          
          if (isActive) {
            list.forEach((otherItem, otherIndex) => {
              if (otherIndex !== index) {
                otherItem.classList.remove('active');
                ilist[otherIndex].classList.remove('active');
              }
            });
          }
        });
      }
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);


  return (
    
    <><div className='container' style={{ backgroundColor : '#000000', marginTop: '-100px', paddingTop: '100px'}}>
      <div className='home-hero'>
        <div className='home-left'>
          <div className='heading'>
            <font className='home-heading'>
              Geo - AI<br/> Precision Made <br/>Simple
            </font>
          </div>
          
        </div>
        <div className='home-right'>
        <div className='side-border'>
            
            
            <font className="home-subheading">
              Revolutionize your geospatial analytics with<br/><font className='a90'>90%+ a</font><font className='ccuracy'>ccuracy</font> through our Geo-AI Platform that<br/>empowers users in Agriculture, Infrastructure, Defence, and Environment sectors to make informed decisions with ease.
            </font>
            </div>
        </div>
        <div className='elipse1'>
          <img src={elipse3} alt=''/>
        </div>
        <div className='elipse2'>
          <img src={elipse4} alt=''/>
        </div>
        <div className='elipse3'>
          <img src={elipse1} alt=''/>
        </div>
        <div className='elipse4'>
          <img src={elipse2} alt=''/>
        </div>
        {/* <div className='elipse5'>
          <img src={elipse5} alt=''/>
        </div> */}
      </div>
      <div className='product-stat' style={{margin: '200px 0 0 0', zIndex: '3'}}>
          <div className='product-stat-item'>
            <img src={group1} alt='arms4ai' style={{height:'60px', width:'60px'}}/>
            <div>
              <h4 className='blueclip' style={{WebkitTextStroke: '4px', letterSpacing: '4px', paddingLeft: '3px'}}>
              03
              </h4>
              <h5 style={{letterSpacing:'1.5px', marginBottom: '10px', fontSize: '10px'}}>
              Continents Serving
              </h5>
              <p style={{fontSize: '10px', fontWeight: '100'}}>
              Operating across Asia, America, and Africa,<br/> showcasing our global presence and reach.
              </p>
            </div>
          </div>
          <div style={{zIndex: 2, height: '70px', width: '2px', backgroundColor: '#1a1717', margin: '70px 30px 0 30px'}}>

          </div>
          <div className='product-stat-item'>
            <img src={group2} alt='arms4ai'  style={{height:'60px', width:'60px'}}/>
            <div> 
              <h4  className='blueclip'  style={{WebkitTextStroke: '4px', letterSpacing: '4px', paddingLeft: '3px'}}>
              06
              </h4>
              <h5 style={{letterSpacing:'1.5px', marginBottom: '10px', fontSize: '10px'}}>
              Government Recognitions and Work Orders
              </h5>
              <p  style={{fontSize: '10px', fontWeight: '100'}}>
              Celebrating six prestigious government <br/>recognitions and work orders, validating our<br/> commitment to excellence.
              </p>
            </div>
          </div>
          <div style={{zIndex: 2, height: '70px', width: '2px', backgroundColor: '#1a1717', margin: '70px 30px 0 30px'}}>

          </div>
          <div className='product-stat-item'>
            <img src={group3} alt='arms4ai' style={{height:'60px', width:'60px'}}/>
            <div>
              <h4  className='blueclip'  style={{WebkitTextStroke: '4px', letterSpacing: '4px', paddingLeft: '3px'}}>
              04
              </h4>
              <h5 style={{letterSpacing:'1.5px', marginBottom: '10px', fontSize: '10px'}}>
              Industry Verticals, 12 Ready-to-Deploy Products:
              </h5>
              <p style={{fontSize: '10px', fontWeight: '100'}}>
              Excelling in four industry verticals with a range of twelve fully <br/> developed and ready-to-deploy products, empowering<br/> clients with cutting-edge solutions.
              </p>
            </div>
          </div>
      </div>
    </div>
      <div className='home-more-detail-holder' style={{position: 'relative', padding: '0 8%', zIndex: 2}}>
        <div className='home-more-detail'>
          ARMS 4 AI's simplifies satellite image analysis <br/>with deep technology and AI. Our GEO - AI <br/>platform prepares, processes, and analyses <br/>satellite images in a <font style={{WebkitTextStroke: '2px', fontSize: '35px', letterSpacing: '6px', color: 'var(--lightBlue)'}}>single click<font style={{color: 'black'}}>,</font> saving<br/>up to 70% of cost & manpower<br/></font>for our stakeholders in B2B and B2G sector.<br/><br/>
          With subscription as a service, our platform <br/>delivers analysis ready data and supports <br/><font style={{WebkitTextStroke: '2px', fontSize: '35px', letterSpacing: '6px', color: 'var(--lightBlue)'}}>decision making </font>with <font style={{WebkitTextStroke: '2px',fontSize: '35px', letterSpacing: '6px', color: 'var(--lightBlue)'}}>no prior <br/>coding</font>experience required
        </div>
        <img src={group5} alt="Arms4AI" style={{height: '400px', width: '600px', position: 'absolute', top: '0px', right: '0'}}/>
      </div>
    <div className='container' style={{zIndex: 2, backgroundColor: 'white'}}>
      <div className='how'>
        <div className='how-heading' id="howhead" style={{position: 'sticky'}}>
          <font> 
            How we are doing it
          </font>
        </div>
        <div className='how-heading-small'>
          <font> 
            How we are doing it
          </font>
        </div>
        <div className='how-subheading-small'>
          <p>
            With our integrated approach of preparing, processing, and analyzing satellite images, we provide a comprehensive solution for sucrose prediction in sugarcane farming. Our technology-driven approach enables farmers to make data-driven decisions, optimize crop management practices, and improve sugarcane yield and quality.
          </p>
        </div>
        <div className='how-subheading' id="howsub">
          <p style={{fontWeight: '100'}}>
            With our integrated approach of preparing, processing, and analyzing satellite images, we provide a comprehensive solution for sucrose prediction in sugarcane farming. Our technology-driven approach enables farmers to make data-driven decisions, optimize crop management practices, and improve sugarcane yield and quality.
          </p>
        </div>
        <div className='how-holder'>
          <div className='how-img'>
            <div className='himg active'>

            </div>
            <div className='himg'>

            </div>
            <div className='himg'>

            </div>
          </div>
          <div className='how-list' id='howlist'>
            <div className='how-list-item active' id='item1'>
              <h6>
                01
              </h6>
              <h4>
                Acquire
              </h4>
              <p>
                Our platform simplifies the process of preparing satellite images with automated one click tools for data preparation. You can quickly execute basic steps like, merging, mosaicking, layer stacking, spectral index processing etc., in a seamless manner.
              </p>
            </div>
            <div className='how-list-item' id='item2'>
              <h6>
                02
              </h6>
              <h4>
                Transform
              </h4>
              <p>
                Our platform streamlines image processing with advanced algorithms that handle image enhancement, data fusion, and integration. You can easily generate processed images with relevant features, such as vegetation indices, weather data, soil characteristics, and more, without any technical hassles.
              </p>
            </div>
            <div className='how-list-item' id='item3'>
              <h6>
                03
              </h6>
              <h4>
                Derive insights
              </h4>
              <p>
                Our platform makes analysis a breeze with machine learning and AI-powered tools. With just a few clicks, you can get a decision making about farm wise sucrose prediction and generate accurate sucrose prediction maps. Our user-friendly interface and intuitive workflows enable smooth analysis with actionable insights.
              </p>
            </div>
          </div>
        </div>
        <div className='how-holder-small'>
          <div className='himg-small'>
            
          </div>
            <div className='how-list-item-small'>
              <h6>
                01
              </h6>
              <h4>
                Acquire
              </h4>
              <p>
                Our platform simplifies the process of preparing satellite images with automated one click tools for data preparation. You can quickly execute basic steps like, merging, mosaicking, layer stacking, spectral index processing etc., in a seamless manner.
              </p>
            </div>
            <div className='himg-small'>

            </div>
            <div className='how-list-item-small'>
              <h6>
                02
              </h6>
              <h4>
                Transform
              </h4>
              <p>
                Our platform streamlines image processing with advanced algorithms that handle image enhancement, data fusion, and integration. You can easily generate processed images with relevant features, such as vegetation indices, weather data, soil characteristics, and more, without any technical hassles.
              </p>
            </div>
            <div className='himg-small'>

            </div>
            <div className='how-list-item-small'>
              <h6>
                03
              </h6>
              <h4>
                Derive insights
              </h4>
              <p>
                Our platform makes analysis a breeze with machine learning and AI-powered tools. With just a few clicks, you can get a decision making about farm wise sucrose prediction and generate accurate sucrose prediction maps. Our user-friendly interface and intuitive workflows enable smooth analysis with actionable insights.
              </p>
            </div>
        </div>
      </div>
  </div>
  <div className='vector1'>
      <img src={vector1} alt=''/>
  </div>
  <div className='container'>
      <div className='above-carosal'>
        
        <div className='above-heading' style={{fontSize: 70}}>
          <font className='above-tech'>Technology Redefined</font>
        </div>
        <div className='above-details' style={{fontSize: 22}}>
          
          Experience the future with cutting-edge<br/> geospatial modeling, advanced computer vision, <br/>
           and powerful machine learning techniques to <br/>transform satellite image data into actionable <br/>insights across diverse sectors.
          
        </div>
        
      </div>
    </div>
    <div className='vector2'>
        <img src={vector2} alt=''/>
    </div>
    <div className='container'>
      <div className='above-carosal-small'>
        <div className='above-heading-small'>
          <font className='above-tech-small'>Technology</font><font> Redefined</font>
        </div>
        <div className='above-details-small' style={{fontSize: 50}}>
          <font>
          Experience the future with cutting-edge geospatial modeling, advanced computer vision, 
           and powerful machine learning techniques to transform satellite image data into actionable insights across diverse sectors.
          </font>
        </div>
      </div>
      <div className='carosal-wrapper'>
        <Carosal />
      </div>
    </div>
    <IntroductionGeo />
    <Client />
    
    <div className='container'>


        


        <div className='home-footer'>
          <div className='footer-left'>
            <h1>
              Industries we serve
            </h1>
            <font>
              Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.
            </font>
            <button type='button' data-role='none' className='slick-arrow slick-prev'>a</button>
          </div>
          <div className='footer-right'>
            <Slider {...settings}>
              <div className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect1} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Infrastructure & Real Estate</p>
                </div>
              </div>
              
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect2} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Agriculture and Energy</p>
                </div>
              </div>
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect3} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Environment</p>
                </div>
              </div>
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect4} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Defence</p>
                </div>
              </div>
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect5} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Academics</p>
                </div>
              </div>
              <div  className='small-slider small-display'>
                <div className="slider-name-bot small-display">
                </div>
              </div>
            </Slider>
          </div>


        </div>
      </div></>
  )
}

import React, { useEffect, useRef } from 'react';
import image4 from '../assets/image4.png'
import Carosal from '../components/Carosal';
import IntroductionGeo from '../components/IntroductionGeo';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Client from '../components/Client';

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 3,
  };
  const observer = useRef(null);

  const itemClick = (item) => {
    console.log('click');
    var elem1 = document.getElementById('item1');
    var elem2 = document.getElementById('item2');
    var elem3 = document.getElementById('item3');
    var elem4 = document.getElementById('how-img-1');
    var elem5 = document.getElementById('how-img-2');
    var elem6 = document.getElementById('how-img-3');
    if(elem1&&elem2&&elem3&&elem4&&elem5&&elem6){
      if('item1' === item){
        elem1.classList.add('active');
        elem2.classList.remove('active');
        elem3.classList.remove('active');
        elem4.classList.add('active');
        elem5.classList.remove('active');
        elem6.classList.remove('active');
      } if ('item2' === item) {
        elem1.classList.remove('active');
        elem2.classList.add('active');
        elem3.classList.remove('active');
        elem4.classList.remove('active');
        elem5.classList.add('active');
        elem6.classList.remove('active');
      } if ('item3' === item) {
        elem1.classList.remove('active');
        elem2.classList.remove('active');
        elem3.classList.add('active');
        elem4.classList.remove('active');
        elem5.classList.remove('active');
        elem6.classList.add('active');
      }
    }
  };

  const handleItem1 = () => {
    itemClick('item1');
  }
  const handleItem2 = () => {
    itemClick('item2');
  }
  const handleItem3 = () => {
    itemClick('item3');
  }

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
    
    var tech = document.getElementById('technology');
    var top = tech.offsetTop;
    document.addEventListener('scroll', function () {
      if(tech.offsetTop-top>0) {
        tech.style.fontSize = (40 - (tech.offsetTop-top)*0.03) +'px';
      }
  });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className='container'>
      <div className='home-hero'>
        <div className='home-left'>
            <div className='heading'>
              <font className='home-heading'>
                Geo - AI Precision Made Simple
              </font>
            </div>
              <div className='side-border'>
                <font className="home-subheading">
                  GRevolutionize your geospatial analytics with 90%+ accuracy through our Geo-AI Platform that empowers users in Agriculture, Infrastructure, Defence, and Environment sectors to make informed decisions with ease.
                </font>
              </div>
            <button className='home-explore'>
              Explore product
            </button>
          </div>
          <div className='home-right'>
            <img src={image4} alt="Arms4AI"/>
          </div>
        </div>
        <div className='home-more-detail'>
        ARMS 4 AI's simplifies satellite image analysis with deep technology and AI. Our GEO - AI platform prepares, processes, and analyses satellite images in a single click, saving up to 70% of cost & manpower for our stakeholders in B2B and B2G sector. With subscription as a service, our platform delivers analysis ready data and supports decision making with no prior coding experience required
        </div>

        <div className='how'>
          <div className='how-heading'>
            <font>
            How we are doing it
            </font>
          </div>
          <div className='how-subheading'>
          <p>
          With our integrated approach of preparing, processing, and analyzing satellite images, we provide a comprehensive solution for sucrose prediction in sugarcane farming. Our technology-driven approach enables farmers to make data-driven decisions, optimize crop management practices, and improve sugarcane yield and quality.
          </p>
          </div>
          <div className='how-holder'>
            <div className='how-img'>
              <div id='how-img-1' className='active'>

              </div>
              <div id='how-img-2'>

              </div>
              <div id='how-img-3'>

              </div>
            </div>
            <div className='how-list'>
              <div className='how-list-item active' id='item1' onClick={handleItem1}>
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
              <div className='how-list-item' id='item2' onClick={handleItem2}>
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
              <div className='how-list-item' id='item3' onClick={handleItem3}>
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
          


        <div className='above-carosal'>
          <div className='above-heading'>
            <font style={{color: '#03085D'}} className='above-tech' id='technology'>Technology</font><font > is simply dummy text of the printing and typesy.</font>
          </div>
          <div className='above-details'>
          <font>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </font>
          </div>
        </div>
        <div className='carosal-wrapper'>
          <Carosal/>
        </div>
        <IntroductionGeo/>

        <Client/>


        <div className='home-footer'>
          <div className='footer-left'>
            <h1>
            Industries we serve
            </h1>
            <p>
            Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.
            </p>
            <button type='button' data-role='none' className='slick-arrow slick-prev'>a</button>
          </div>
          <div className='footer-right'>
          <Slider {...settings}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </Slider>
          </div>
        </div>
    </div>
  )
}

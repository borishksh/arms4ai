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
    var above1 = document.getElementById('above-carosal1');
    var above2 = document.getElementById('above-carosal2');
    const hs = document.getElementById("howsub");
    const hh = document.getElementById("howhead");
    const hl = document.getElementById("howlist");
    var top = tech.offsetTop;
    document.addEventListener('scroll', function () {
      if(tech.offsetTop-top>0) {
        above1.style.opacity = '0';
        above2.style.opacity = '0';
        tech.style.fontSize = (40 - (tech.offsetTop-top)*0.03) +'px';
      } else {
        above1.style.opacity = '1';
        above2.style.opacity = '1';
      }
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
        hh.style.fontSize = '70px';
      }
      if(rect1.top>800)
      {
        hh.style.fontSize = '50px';
      }
      if(rect2.top<500)
      {
        hh.style.fontSize = '60px';
      }
    });

    var list = document.querySelectorAll('.how-list-item');
    var ilist = document.querySelectorAll('.himg');
    document.addEventListener('scroll', function () {
      if(ilist.length >=3 ){
        list.forEach((item, index) => {
          const isActive = item.offsetTop <= window.scrollY + (window.innerWidth / 4);
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
          <div className='how-heading' id="howhead">
            <font>
            How we are doing it
            </font>
          </div>
          <div className='how-subheading' id="howsub">
          <p>
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
        </div>
          


        <div className='above-carosal'>
          <div className='above-heading'>
            <font style={{color: '#03085D'}} className='above-tech' id='technology'>Technology</font><font  id='above-carosal1'> is simply dummy text of the printing and typesy.</font>
          </div>
          <div className='above-details'>
          <font  id='above-carosal2'>
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

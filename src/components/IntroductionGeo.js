import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function IntroductionGeo() {

  useEffect(() => {
    var intro = document.getElementById('intro-geo');
    const fadingel1 = document.querySelectorAll('.prepare-head');
    const fadingel2 = document.querySelectorAll('.prepare-p');
    const fadingel3 = document.querySelectorAll('.objective');
    const fadingel4 = document.querySelectorAll('.objective-details');
    const fadingel5 = document.querySelectorAll('.objective-list');
    document.addEventListener('scroll', function () {
      var rect =intro.getBoundingClientRect();
      if(rect.top<800 && rect.top>100)
      {
        intro.style.fontSize = (1000-rect.top)*0.07 +'px';
      }

      fadingel1.forEach((el) => fading(el));
      fadingel2.forEach((el) => fading(el));
      fadingel3.forEach((el) => fading(el));
      fadingel4.forEach((el) => fading(el));
      fadingel5.forEach((el) => fading(el));
      function fading(el){
        var rect1 = el.getBoundingClientRect();
        var isAtTop = rect1.top <= 230;
        if(isAtTop){
          el.classList.add("fade");
        } else {
          el.classList.remove("fade");
        }
      }
    });

  }, []);

  return (
    <div><div className='introducing-heading'>
    <h1 id='intro-geo'>Introducing Geo - AI Platform</h1>
    </div>
    <div className='intro-holder'>
      <div className='intro-left'> 
        <h6 className='prepare'>Prepare <font className='prepareai'>AI</font></h6>
        <h3 className='prepare-head'>Simplify pre-processing tasks</h3>
        <p className='prepare-p'>Remotely sensed images often contain noise and errors, requiring image pre-processing techniques. At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stacking, spectral index calculation, merging, mosaicking, and more, ensuring high-quality images for advanced analysis.</p>
        <button className='know-more'>
        Know more
        </button>
        <h6 className='objective'>Object Detection</h6>
        <font className='objective-details'>
        Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.
        </font>
        <ul className='objective-list'>
          <li>
          Facial recognition
          </li>
          <li>
          Object Detection
          </li><li>
          Facial recognition
          </li><li>
          Object Detection
          </li>
          <li>
          Facial recognition
          </li>
        </ul>
      </div>
      <div className='intro-right'>
        <Parallax speed={-90} style={{zIndex:-1}}>
            <div className='phone'>
            
            </div>
        </Parallax>
        <div className='small-phone'>

        </div>
        </div>
    </div>
    <div className='intro-holder'>
      <div className='intro-right'>
        <Parallax speed={-90} style={{zIndex:-1}}>
            <div className='phone'>
            
            </div>
        </Parallax>
        <div className='small-phone'>

        </div>
        </div>
      <div className='intro-left'> 
        <h6 className='prepare'>Process <font className='prepareai'>AI</font></h6>
        <h3 className='prepare-head'>Instant data extraction</h3>
        <p className='prepare-p'>Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.</p>
        <button className='know-more'>
        Know more
        </button>
        <h6 className='objective'>Object Detection</h6>
        <font className='objective-details'>
        Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.
        </font>
        <ul className='objective-list'>
          <li>
          Facial recognition
          </li>
          <li>
          Object Detection
          </li><li>
          Facial recognition
          </li><li>
          Object Detection
          </li>
          <li>
          Facial recognition
          </li>
        </ul>
      </div>
    </div>
    <div className='intro-holder'>
      <div className='intro-left'> 
        <h6 className='prepare'>Analyse <font className='prepareai'>AI</font></h6>
        <h3 className='prepare-head'>Data to Decisions</h3>
        <p className='prepare-p'>Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.</p>
        <button className='know-more' style={{marginTop:'30px'}}>
        Know more
        </button>
      </div>
      <div className='intro-right' style={{paddingTop:'30px'}}>
          <div className='phone'>
          </div>
          <div className='small-phone'>

          </div>
      </div>
    </div>
    </div>
  )
}

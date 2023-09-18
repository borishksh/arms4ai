import React, { useEffect } from 'react';
import group1 from '../assets/Group 3542.png';
import group2 from '../assets/Group 3545.png';
import group3 from '../assets/Group 3541.png';

export default function IntroductionGeo() {

  /*function itemDisplay(i) {
    var elements = ['i1', 'i2', 'i3', 'i4', 'i5'];
    var lists = ['l1', 'l2', 'l3', 'l4', 'l5'];
    for (var j = 1; j <= 5; j++) {
      var element = document.getElementById(elements[j - 1]);
      var list = document.getElementById(lists[j - 1]);
      element.style.display = (i === j) ? 'block' : 'none';
      list.style.opacity = (i === j) ? '1' : '0.2';
    }
  }
  
  function itemDisplay1(i) {
    var elements = ['i12', 'i22', 'i32', 'i42', 'i52'];
    var lists = ['l12', 'l22', 'l32', 'l42', 'l52'];
    for (var j = 1; j <= 5; j++) {
      var element = document.getElementById(elements[j - 1]);
      var list = document.getElementById(lists[j - 1]);
      element.style.display = (i === j) ? 'block' : 'none';
      list.style.opacity = (i === j) ? '1' : '0.2';
    }
  }*/
  useEffect(() => {
    var intro = document.getElementById('intro-geo');
    //var navBar = document.getElementById('navBar');
    var introHead = document.getElementById('intro-holder');
    const fadingel1 = document.querySelectorAll('.prepare-div');
    const fadingel3 = document.querySelectorAll('.objective');
    const fadingel4 = document.querySelectorAll('.objective-details');
    const fadingel5 = document.querySelectorAll('.objective-list');
    document.addEventListener('scroll', function () {
      var rect = intro.getBoundingClientRect();
      var rectHead = introHead.getBoundingClientRect();
      if(rectHead.top<-350)
      {
        //introHead.style.background = '#0e1012';
        //navBar.style.background = '#0e1012';
        //navBar.style.transition = '0.5s';
        //navBar.style.opacity = '1';
        //navBar.style.display = 'block';
        intro.style.transition = '0.5s';
      } else {
        introHead.style.background = 'transparent';
        //navBar.style.background = 'transparent';
        //navBar.style.display = 'none';
        //navBar.style.opacity = '0';
        intro.style.transition = '0s';
      }
      if(rectHead.top<-6450)
      {
        //navBar.style.opacity = '0';
      } else {
        //navBar.style.opacity = '1';
      }
      if(rectHead.top<-450)
      {
        intro.style.opacity = '0';
      } else {
        intro.style.opacity = '1';
      }
      if(rect.top<800 && rect.top>400)
      {
        intro.style.fontSize = (1000-rect.top)*0.099 +'px';
      }

      fadingel1.forEach((el) => fading(el));
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
/*<nav className="navbar" id='navBar' style={{opacity:'0'}}>
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/" className='nav-title'>
              <img src={logo} alt="Arms4AI"/>
            </NavLink>
          </div>
          <ul className="nav-links show-nav" >
            <li>
              <NavLink to="/" className="activeLink"><div>Home</div></NavLink>
            </li>
            <li>
              <NavLink to="/about" className="activeLink" style={{color:'white'}}><div>About</div></NavLink>
            </li>
            <li>
              <NavLink to="/product" className="activeLink" style={{color:'white'}}><div>Product</div></NavLink>
            </li>
            <li>
              <NavLink to="/industry" className="activeLink" style={{color:'white'}}><div>Industry verticals</div></NavLink>
            </li>
            <li>
              <NavLink to="/resources" className="activeLink" style={{color:'white'}}><div>Resources</div></NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="activeLink" style={{color:'white'}}><div>Contact</div></NavLink>
            </li>
            <li className="pre-nav">
              <NavLink to="/"><div>Pre-Register</div></NavLink>
            </li>
          </ul>
          <NavLink to="/"><div className="pre-register">Pre-Register</div></NavLink>
        </div>
      </nav>*/
      /*<h6 className='objective'>Object Detection</h6>
          <font className='objective-details'>
            Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost.
          </font>
          <ul className='objective-list'>
            <li id='l1' onClick={() => itemDisplay(1)}>
              Facial recognition
              <p id="i1" style={{color:'white', fontSize:'16px', paddingLeft:'20px', display:'none'}}>
              Remotely sensed images often contain noise and errors, requiring image pre-processing techniques.
              </p>
            </li>
            <li id='l2' onClick={() => itemDisplay(2)}>
              Object Detection
              <p id="i2" style={{color:'white', fontSize:'16px', paddingLeft:'20px', display:'none'}}>
              Remotely sensed images often contain noise and errors, requiring image pre-processing techniques.
              </p>
            </li>
            <li id='l3' onClick={() => itemDisplay(3)}>
              Facial recognition
              <p id="i3" style={{color:'white', fontSize:'16px', paddingLeft:'20px', display:'none'}}>
              Remotely sensed images often contain noise and errors, requiring image pre-processing techniques.
              </p>
            </li>
            <li id='l4' onClick={() => itemDisplay(4)}>
              Object Detection
              <p id="i4" style={{color:'white', fontSize:'16px', paddingLeft:'20px', display:'none'}}>
              Remotely sensed images often contain noise and errors, requiring image pre-processing techniques.
              </p>
            </li>
            <li id='l5' onClick={() => itemDisplay(5)}>
              Facial recognition
              <p id="i5" style={{color:'white', fontSize:'16px', paddingLeft:'20px', display:'none'}}>
              Remotely sensed images often contain noise and errors, requiring image pre-processing techniques.
              </p>
            </li>
          </ul>*/
  return (
    <div>
      
      <div className='introducing-heading' id='intro-holder'>
        <h1 id='intro-geo' className='intro-geo-h'>Introducing Geo - AI Platform</h1>    
        <h1 id='intro-geo-small' className='intro-geo-h-small'>Introducing <br/>Geo - AI Platform</h1>     
      </div>
      <div className='intro-holder-1 container'>
        <div className='intro-left'>
            <h6 className='prepare'>Prepare <font className='prepareai'>AI</font>
             </h6>
            
          <div className='prepare-div'>
            <h3 className='prepare-head'>Simplify pre-processing tasks</h3>
            <font className='prepare-p'>Remotely sensed images often contain noise and errors,<br/>requiring image pre-processing techniques. At ARMS 4 AI,<br/>our one click automated tools streamline the process,<br/>including basic satellite image preparation tasks such as<br/>layer stacking, spectral index calculation, merging,<br/>mosaicking, and more, ensuring high-quality images for<br/>advanced analysis.</font>
          </div>
          
        </div>
        <div className='intro-right'>
            <div className='phone'>
              <img src={group1} alt=''/>
            </div>
          <div className='small-phone'>
            <img src={group1} alt=''/>
          </div>
        </div>
      </div>
        <div className='intro-holder'>
          <div className='intro-right'  style={{ paddingTop: '30px', paddingRight: '60px'}}>
              <div className='phone'>
              <img src={group2} alt='' style={{width: '100%', marginLeft: '0'}}/>
              </div>
          </div>
          <div className='intro-left'>
            <h6 className='prepare'>Process <font className='prepareai'>AI</font></h6>
            <div className='prepare-div'>
              <h3 className='prepare-head'>Instant data extraction</h3>
              <font className='prepare-p'>Process AI provides one-click tools for feature extraction,<br/>sensor fusion, and change detection. Simply upload your<br/>satellite imagery, select the desired features, and let our<br/>platform handle the rest. Our tools deliver results in<br/>minutes, helping you streamline your data extraction<br/>process and unlock valuable insights from your satellite<br/>imagery.</font>
            </div>
          </div>
          <div className='intro-right small-phone' style={{zIndex: 2}}>
            <div>
            <img src={group2} alt=''/>
            </div>
          </div>
        </div>
        
        <div className='intro-holder' style={{paddingBottom: '50px'}}>
          <div className='intro-left'>
            <h6 className='prepare'>Analyse <font className='prepareai'>AI</font></h6>
            <div className='prepare-div'>
              <h3 className='prepare-head'>Data to Decisions</h3>
              <font className='prepare-p'>Analyze AI offers advanced predictive and prescriptive<br/>analysis for decision making in various verticals. Our<br/>platform provides spatial decision-making capabilities,<br/>delivering timely actionable insights that enable informed<br/>decisions. Streamline data analysis and focus on taking<br/>action, rather than getting bogged down in data<br/>understanding.</font>
            </div>
            
          </div>
          <div className='intro-right' style={{ paddingTop: '30px' }}>
            <div className='phone'>
            <img src={group3} alt=''/>
            </div>
            <div className='small-phone'>
            <img src={group3} alt=''/>
            </div>
          </div>
        </div>
    </div>
  )
}

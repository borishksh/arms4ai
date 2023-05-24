import React,{Component} from 'react'
import image1 from '../assets/Frame691.png';
import Client from '../components/Client';
import { goToPrevious, goToNext, myFunction, autoSlide } from '../helpers/CarousalSlider';

export default class 
About extends Component {

  constructor(props) {
    super(props);
    this.aboutMission = React.createRef();
    this.aboutTeam = React.createRef();
    this.interval = null;
    this.i = 0;
    this.isDragStart = false;
    this.isDragging = false;
    this.prevPageX = 0;
    this.prevScrollLeft = 0;
    this.positionDiff = 0;
  }

  handleGoToPrevious = () => {
    goToPrevious(this.aboutTeam);
  };

  handleGoToNext = () => {
    goToNext(this.aboutTeam);
  };

  componentDidMount() {
    this.aboutTeam.current.addEventListener("mousedown", this.dragStart);
    this.aboutTeam.current.addEventListener("mousemove", this.dragging);
    this.aboutTeam.current.addEventListener("mouseup", this.dragStop);
    this.startInterval();
  }

  componentWillUnmount() {
    this.aboutTeam.current.removeEventListener("mousedown",this.dragStart);
    this.aboutTeam.current.removeEventListener("mousemove", this.dragging);
    this.aboutTeam.current.removeEventListener("mouseup", this.dragStop);
    this.clearInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      myFunction(this.aboutMission,this.i,3);
      if(this.i >=3)
        this.i = 0;
      this.i = this.i + 1;
    }, 5000);
    
  }

  clearInterval() {
    clearInterval(this.interval);
  }

  
  dragStart = (e) => {
    if(this.aboutTeam.current === null){
      return;
    } else {
      this.isDragStart = true;
      this.prevPageX = e.pageX || e.touches[0].pageX;
      this.prevScrollLeft = this.aboutTeam.current.scrollLeft;
    }
  }
  dragging = (e) =>  {
    if(this.aboutTeam.current === null){
      return;
    } else {
    if(!this.isDragStart) return;
      e.preventDefault();
      this.isDragStart = true;
      this.aboutTeam.current.classList.add("dragging");
      this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
      this.aboutTeam.current.scrollLeft = this.prevScrollLeft - this.positionDiff;
    }
  }
  dragStop = (e) =>  {  
    if(this.aboutTeam.current === null){
      return;
    } else {
      if(!this.isDragStart) return;
      this.isDragStart = false;
      this.positionDiff = autoSlide(this.aboutTeam,this.positionDiff,this.prevScrollLeft);
    }
  } 
  
render() {
  return (
    <><div className='container'>
      <div className='about-hero'>
        <h1>
          Geo - AI Precision Made Simple
        </h1>
        <p className='about-details'>
          Arms4AI is a 100% Indian Startup venture based in New Delhi. We specialise in building tailored AI based Geospatial solutions by leveraging multi-disciplinary Geospatial Technologies to develop cutting-edge solutions, designed for strategic impact, decision and intelligence and to strengthen national security. We at Arms4AI provide a Revenue Maximisation Cognitive Platform for the Geospatial Industry that is a single window online platform/desktop solution with powerful image analysis solutions based on deep learning and machine learning.
        </p>
        <div className='about-hero-img'>
          <img src={image1} alt='arms4ai' />
        </div>
      </div>
      <div className='about-stat'>
        <div>
          <font className='stat-no'>
            123+
          </font>
          <font className='stat-detail' style={{ fontSize: '12px' }}>
            Lorem Ipsum is simply dummy text of the printing and.
          </font>
        </div>
        <div>
          <font className='stat-no'>
            23,000
          </font>
          <font className='stat-detail' style={{ fontSize: '12px' }}>
            Lorem Ipsum is simply dummy text of the
          </font>
        </div>
        <div>
          <font className='stat-no'>
            1,000,00
          </font>
          <font className='stat-detail' style={{ fontSize: '12px' }}>
            Lorem Ipsum is simply dummy text of the
          </font>
        </div>
        <div>
          <font className='stat-no'>
            123
          </font>
          <font className='stat-detail' style={{ fontSize: '12px' }}>
            Lorem Ipsum is simply dummy text of the printing and.
          </font>
        </div>
      </div>
      <div className='about-mission' ref={this.aboutMission}>
        <div className='about-slider'>
          <h3>Join us on our Mission to transform the world with bold ideas and Innovation</h3>
          <p>  </p>
        </div>
        <div className='about-slider'>
          <h3>Join us on our <font>Mission</font> to transform the world with bold ideas and Innovation</h3>
          <p>
            Our vision is to enable the entire Global Geospatial Ecosystem with cutting edge Technology & Solutions Designed and Made in India Product. with appropriate technology and solution that solves the problem of manual scavenging and indefinite time consumption forever that open doors to analysis driven approach further.
          </p>
        </div>
        <div className='about-slider'>
          <h3>Join us on our Mission to transform the world with bold ideas and <font>Innovation</font></h3>
          <p>
            This platform is designed with the base of innovation and business  intelligence that provides the user with various solutions like reduced timelines, improved productivity, efficient time utilisation, reduced timelines and optimized business results in a single click that bridges the existing technology and capability gap. Data is the new oil in today’s time and having the domain expertise to use this data for advanced use cases in order to solve problems and generate revenue is what we aim for.
          </p>
        </div>
      </div>
      <div className='about-team' ref={this.aboutTeam}>
        <div className='team-slider'>
          <div className='team-left'>
            <h3>Team that make it happen</h3>
            <p>Our team has a blend of vast experience starting from strategic planning and operations, over 20 years of domain expertise in geospatial technology, capabilities to build cutting edge technology driven tools, and an ability to sell at the right place and at the right moment. We have a perfect amalgamation of experience, freshness and wisdom to establish our names in the industry.</p>
            <p>The combination of our team, domain expertise, idea conceptualisation, current market worth, business traction, network within India and abroad and most importantly wisdom to apply this technology in image analysis and produce new innovative solutions give us an edge to get in this venture.
            </p>
            <div className='team-button'>
              <div onClick={this.handleGoToPrevious}>
                ❰
              </div>
              <div onClick={this.handleGoToNext}>
                ❱
              </div>
            </div>
          </div>
          <div className='team-right'>
            <div className='team'>

            </div>
            <div className='team'>

            </div>
            <div className='team'>

            </div>
          </div>
        </div>
        <div className='team-slider'>
          <div className='team-left'>
            <font className='jagriti'>Jagriti</font><font className='dabas'>Dabas</font><font className='foco'>Founder & CEO</font>
            <p>A physics scholar, who pursued masters in geoinformatics being one of the top rankers of her university. A steadfast entrepreneur, a self learner entranced by AI and machine learning who possesses a ceaseless urge of venturing for something new in it with her expertise in AI based image analysis and deep learning algorithms.
            </p>
            <p>
              An enthusiast to work with ingenuity in advanced analytics for geospatial domain using her R&D skills. she has an eye for details and also the flair for extracting propitious information from the accessible data. A doctoral student using her attainments for her aim of being conducive to the society.</p>
            <div className='team-button'>
              <div onClick={this.handleGoToPrevious}>
                ❰
              </div>
              <div onClick={this.handleGoToNext}>
                ❱
              </div>
            </div>
          </div>
          <div className='team-right'>
            <div className='co'>

            </div>
            <div className='co'>

            </div>
          </div>
        </div>
      </div>

      <div className='about-focus'>
        <div className='about-focus-left'>
          <h3>
            We focus on building solutions
          </h3>
          <p>
            The combination of our team, domain expertise, idea conceptualisation, current market worth, business traction, network within India and abroad and most importantly wisdom to apply this technology in image analysis and produce new innovative solutions give us an edge to get in this venture.
          </p>
        </div>
        <div className='about-focus-right'>
          <div className='focus-list'>
            <div>

            </div>
            <h6>
              High Effiiciency and Productivity
            </h6>
          </div>
          <div className='focus-list'>
            <div>

            </div>
            <h6>
              Infrastructure and high Resource Economy
            </h6>
          </div>
          <div className='focus-list'>
            <div>

            </div>
            <h6>
              Process Automation
            </h6>
          </div>
          <div className='focus-list'>
            <div>

            </div>
            <h6>
              Better Utilization of Data
            </h6>
          </div>
          <div className='focus-list'>
            <div>

            </div>
            <h6>
              Measurement Accuracy
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className='about-blue'>
      <div className='container'>
        <h1>
        Service Models
        </h1>
        <p>
        The combination of our team, domain expertise, idea conceptualisation, current market worth, business traction, network within India and abroad and most importantly wisdom to apply this technology in image analysis and produce new innovative solutions give us an edge to get in this venture.

        </p>
        <div className='blue-items'>
          <div className='blue-item'>
            <div>

            </div>
            <font className='blue-item-name'>
            CAAS
            </font>
            <font className='blue-item-subname'>
            Capability as a Service
            </font>
            <font className='blue-item-detail'>
            Customised stand-alone desktop-based tool, for enterprise industry offering an end to end solution for data preparation and geospatial image analysis with advanced analytics.
            </font>
          </div>
          <div className='blue-item'>
            <div>

            </div>
            <font className='blue-item-name'>
            DAAS
            </font>
            <font className='blue-item-subname'>
            Data as a Service
            </font>
            <font className='blue-item-detail'>
            Customers who require bulk data products in no time and wish to procure data products directly.
            </font>
          </div>
          <div className='blue-item'>
            <div>

            </div>
            <font className='blue-item-name'>
            SAAS
            </font>
            <font className='blue-item-subname'>
            Subscription as a Service
            </font>
            <font className='blue-item-detail'>
            Online platform based on subscription as per the user requirement that will offer number of AI based image processing tools.
            </font>
          </div>
        </div>
      </div>
    </div>
    <Client />
    <div style={{height:'200px'}}>

    </div>
    </>
  )
}
}

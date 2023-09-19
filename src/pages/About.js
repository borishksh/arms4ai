import React,{Component} from 'react'
import twiter from '../assets/twitter (1) 1.png';
import linkedn from '../assets/linkedin (1) 1.png';

export default class 
About extends Component {

  state = {
    imgIndex: 1
  };

  /*handleGoToPrevious = () => {
    var team1 = document.getElementById('team1');
    var team2 = document.getElementById('team2');
    var team3 = document.getElementById('team3');
    if(this.state.imgIndex === 2)
    {
      team2.classList.add('front');
      team3.classList.remove('front');
      team1.classList.remove('front');

      this.setState({
        imgIndex: 1
      });
    }
    if(this.state.imgIndex === 1)
    {
      team1.classList.add('front');
      team2.classList.remove('front');
      team3.classList.remove('front');
      this.setState({
        imgIndex: 0
      });
    }
  };

  handleGoToNext = () => {
    var team1 = document.getElementById('team1');
    var team2 = document.getElementById('team2');
    var team3 = document.getElementById('team3');
    if(this.state.imgIndex === 1)
    {
      team3.classList.add('front');
      team2.classList.remove('front');
      team1.classList.remove('front');
      this.setState({
        imgIndex: 2
      });
    }
    if(this.state.imgIndex === 0)
    {
      team2.classList.add('front');
      team3.classList.remove('front');
      team1.classList.remove('front');
      this.setState({
        imgIndex: 1
      });
    }
  };*/

  componentDidMount() {
    /*var img1 = document.getElementById('about-img');
    if(img1!=null) {
      var top = img1.offsetTop;    
      document.addEventListener('scroll', function () {
        if(window.scrollY>0 && window.scrollY-top+200<0) {
          img1.style.width = (60 + (window.scrollY)/20) +'%';
        }
      });
    }*/
    var mission1 = document.getElementById('mission1');
    var mission2 = document.getElementById('mission2');
    var mission3 = document.getElementById('mission3');
    //var text1 = document.getElementById('text1');
    //var text2 = document.getElementById('text2');
    //var team1 = document.getElementById('team1');
    //var team2 = document.getElementById('team2');
    //var team3 = document.getElementById('team3');
    document.addEventListener('scroll', function () {
      var rect1 = mission1.getBoundingClientRect();
      var rect2 = mission2.getBoundingClientRect();
      var rect3 = mission3.getBoundingClientRect();
      //var rect5 = text2.getBoundingClientRect();
      if(rect1.top === 300)
      {
        mission1.classList.add('active');
        mission2.classList.remove('active');
        mission3.classList.remove('active');
      }
      if(rect2.top === 300)
      {
        mission1.classList.remove('active');
        mission2.classList.add('active');
        mission3.classList.remove('active');
      }
      if(rect3.top <= 300)
      {
        mission1.classList.remove('active');
        mission2.classList.remove('active');
        mission3.classList.add('active');
      }
      /*if(rect5.top === 150)
      {
        text1.classList.remove('active');
        text2.classList.add('active');
        team1.classList.add('active');
        team2.classList.add('active');
        team3.classList.add('active');
      }
      if(rect5.top > 150)
      {
        text1.classList.add('active');
        text2.classList.remove('active');
        team1.classList.remove('active');
        team2.classList.remove('active');
        team3.classList.remove('active');
      }*/
    });
      
  }

  /*<div className='team-slider'>
          <div className='team-left'>
            <div className='team-text active' id='text1'>
              <h3>Team that make it happen</h3>
              <p>Our team has a blend of vast experience starting from strategic planning and operations, over 20 years of domain expertise in geospatial technology, capabilities to build cutting edge technology driven tools, and an ability to sell at the right place and at the right moment. We have a perfect amalgamation of experience, freshness and wisdom to establish our names in the industry.</p>
              <p>The combination of our team, domain expertise, idea conceptualisation, current market worth, business traction, network within India and abroad and most importantly wisdom to apply this technology in image analysis and produce new innovative solutions give us an edge to get in this venture.
              </p>
            </div>
            <div className='team-text' id='text2'>
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
          </div>
          <div className='team-right'>
            <div className='team-img'>
              <div className='team front' id='team2'>

              </div>
              <div className='team' id='team3'>

              </div>
              <div className='team' id='team1'>

              </div>
            </div>
          </div>
        </div>*/
render() {
  return (
    <><div className='container'>
      <div className='about-hero'>
        <h1>
        Where Expertise <br/>Meets Innovation
        </h1>
        <p className='about-details'>
        Arms4AI is a 100% Indian Startup venture based in New Delhi. We specialize in building tailored AI based Geospatial solutions by leveraging multi-disciplinary Geospatial Technologies to develop cutting-edge solutions, designed for strategic impact, decision and intelligence and to strengthen national security. 
        </p>
      </div>
      <div className='about-ani'>
        <h1>
        GEO-AI Innovator, Transforming Data into Informed Decisions Across Industries in One Click
        </h1>
      </div>
    </div>
    <div className='white-ball-holder'>
      <div className='white-ball'>

      </div>
    </div>
    <div className='container' style={{backgroundColor: 'white'}}>
      <div className='about-mission'>
        <div className='about-slider active' id='mission1'>
          <h3>Join us on our Mission to transform the world with bold ideas and Innovation</h3>
          <p>  </p>
        </div>
        <div className='about-slider' id='mission2'>
          <h3>Join us on our <font>Mission</font> to transform the world with bold ideas and Innovation</h3>
          <p>
            Our vision is to enable the entire Global Geospatial Ecosystem with cutting edge Technology & Solutions Designed and Made in India Product. with appropriate technology and solution that solves the problem of manual scavenging and indefinite time consumption forever that open doors to analysis driven approach further.
          </p>
        </div>
        <div className='about-slider' id='mission3'>
          <h3>Join us on our Mission to transform the world with bold ideas and <font>Innovation</font></h3>
          <p>
            This platform is designed with the base of innovation and business  intelligence that provides the user with various solutions like reduced timelines, improved productivity, efficient time utilisation, reduced timelines and optimized business results in a single click that bridges the existing technology and capability gap. Data is the new oil in today’s time and having the domain expertise to use this data for advanced use cases in order to solve problems and generate revenue is what we aim for.
          </p>
        </div>
      </div>
    </div>
    <div className='about-blue' style={{marginTop: '0'}}>
      <div className='container'>
        <div className='blue-flex'>
          <div className='blue-left'>
            <h3>
            MEET THE TEAM
            </h3>
            <h1>
            A dream team of experts who make it happen every day.
            </h1>
          </div>
          <div className='blue-right'>
            <p>
            Our team has a blend of vast experience starting from strategic planning and operations, over 20 years of domain expertise in geospatial technology, capabilities to build cutting edge technology driven tools, and an ability to sell at the right place and at the right moment. We have a perfect amalgamation of experience, freshness and wisdom to establish our names in the industry.
            <br/>
            <br/>
            The combination of our team, domain expertise, idea conceptualisation, current market worth, business traction, network within India and abroad and most importantly wisdom to apply this technology in image analysis and produce new innovative solutions give us an edge to get in this venture.

            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='container' style={{backgroundColor: 'white', paddingTop: '300px'}}>
      <div className='about-team'>
        <h1>
        Team Members
        </h1>
        <div className='team-card-list-holder'>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='about-team'>
        <h1>
        Advisors
        </h1>
        <div className='team-card-list-holder'>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
          </div>
          <div className='team-card'>
            <div className='team-card-img'>

            </div>
            <h6>
            <font>JAGRITI </font> DABAS
            </h6>
            <div className='card-line'>

            </div>
            <div className='card-footer'>
              <p>
              CEO & Co-Founder
              </p> 
              <div>
              <img src={twiter} alt=''/>
              <img src={linkedn} alt=''/>
              </div>
              
            </div>
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
    <div className='container'>
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
    <div style={{height:'200px'}}>

    </div>
    </>
  )
}
}

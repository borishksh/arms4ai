import React, {useRef, useEffect} from 'react'
import carPark from "../assets/Rectangle 76.png";
import mapImg from "../assets/Rectangle 77.jpg";
import mapBlue from "../assets/Rectangle 78.jpg";
import image1 from "../assets/Rectangle 79.jpg";
import image2 from "../assets/rect1.webp";
import image3 from "../assets/rect2.png";
import image4 from "../assets/rect3.gif";
import image5 from "../assets/rect4.webp";
import image6 from "../assets/rect5.webp";
import image7 from "../assets/rect6.jpg";
import def1 from "../assets/Defense1.jpg";
import def2 from "../assets/Defense2.jpg";
import def3 from "../assets/Defense3.jpg";
import def4 from "../assets/Defense4.jpg";
import agri2 from "../assets/agri2.jpeg";
import agri3 from "../assets/agri3.jpeg";
import agri4 from "../assets/agri4.jpeg";
import agri5 from "../assets/agri5.jpeg";
export default function Sectionbar() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const handleClick1 = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick2 = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick3 = () => {
        ref3.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick4 = () => {
        ref4.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick5 = () => {
        ref5.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => { 
        var btn1 = document.getElementById('btn-1');
        var btn2 = document.getElementById('btn-2');
        var btn3 = document.getElementById('btn-3');
        var btn4 = document.getElementById('btn-4');
        var btn5 = document.getElementById('btn-5');
        document.addEventListener('scroll', function () {
            if(window.scrollY-ref1.current?.offsetTop>=-30) {
                btn1.classList.add('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                btn5.classList.remove('active');
            } if(window.scrollY-ref2.current?.offsetTop>=-30) {
                btn1.classList.remove('active');
                btn2.classList.add('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                btn5.classList.remove('active');
            } if(window.scrollY-ref3.current?.offsetTop>=-30) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.add('active');
                btn4.classList.remove('active');
                btn5.classList.remove('active');
            } if(window.scrollY-ref4.current?.offsetTop>=-30) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.add('active');
                btn5.classList.remove('active');
            } if(window.scrollY-ref5.current?.offsetTop>=-30) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                btn5.classList.add('active');
            }
          });
    }, []);



    const args1 = [
        ["Infrastructure & Real Estate"],
        [""],
        ["Car Detection/Parking Lot Detection For Retailer's Profit/Loss: "],
        ["Prediction of retailer’s profits by counting cars on the parking lots. As the number of cars on the parking lot depicts direct relationship with the revenue in a way, “more cars – more customers – more revenue”, if there is an automated algorithm to accurately detect and count cars on satellite imagery at parking lots across the globe and augment this data using other sources (e.g. socioeconomic ones) it’s possible to predict retailers’ profits."],
        [""],
        ["Real Time Road Quality Monitoring from Space"],
        ["By analyzing data from various sources such as satellite imagery, sensors, and crowd-sourced inputs, this technology provides valuable insights into road conditions, change in road construction, congestion, accidents, and other issues. Its utility lies in enabling proactive monitoring, maintenance, optimizing traffic flow, and enhancing overall road safety and efficiency for drivers and authorities. "],
        ["Building Footprint Extraction"],
        ["This data is extremely useful for estimating property tax assessment, disaster management planning, revenue departments, telecom industry for laying 5G lines etc.        "],
        ["Construction Monitoring: "],
        ["Change detection technology plays a significant role in monitoring the construction activities through remote methods. Currently, it's a very stringent process to manage and monitor large scale constructions at various places. But with this technology presented in complete automation, we can easily monitor and track the construction activities at a large scale."],
    ]
    const args2 = [
        ["Agriculture and Energy"],
        [""],
        ["Some of the use cases we are currently working on:"],
        ["We leverage the power of AI & ML algorithms on high resolution satellite images along with the geospatial domain expertise to help stakeholders make the appropriate decisions. "],
        ["Farm Wise Crop yield Estimation and Prediction"],
        ["Location Wise Soil Moisture Assessment"],
        ["Predicting Optimum Time of Crop Harvest"],
        ["Spatial Planning Framework for Agri-waste to Bioenergy"],
        ["Quantifying GHG Emission and Carbon Credits"],
    ]
    const args3 = [
        ["Dealing With Environmental Concerns"],
        [""],
        ["Tree Inventory management/Tree Count Analysis"],
        ["Automatic Land Use Land Cover Classification"],
        ["Forest Cover Classifications"],
        ["Automatic Flood Inundation Mapping`"],
        ["Managing & Monitoring Timber Forest Tonnage "],
        ["Surface and Ground Water Resource Optimisation"],
        ["can be the potential solutions for all streams of people including decision makers and researchers."],
    ]
    const args4 = [
        ["Timely and Actionable Insight for Defense"],
        [""],
        ["Surveying areas via satellite/vehicle detection:"],
        ["A person trying to monitor and analyze the traffic pattern of vehicles moving frequently to and from military installation manually would take time to identify the vehicles of interest and further pass on the information. But an algorithm based on machine learning would be able to establish the pattern of regular flux of cars moving and thus if the change in cars pattern is observed, it would automatically raise an anomaly and would alert the person of this change."],
        ["Tunnel Detection using Synthetic Aperture Radar (SAR)"],
        ["data involves analyzing the radar signals collected by SAR satellites or sensors to identify underground tunnels or man-made structures hidden beneath the Earth's surface. SAR technology can penetrate the ground and provide valuable information about subsurface structures."],
        ["Border Monitoring:"],
        ["It takes humongous effort to guard the border area currently. With the help of Geo-AI platform, sensitive areas of borders could be "],
        ["Settlements Detection: "],
        ["Identifying the change in settlements in any tactical area on a daily basis is of utmost importance."],
        ["Ships Detection: "],
        ["Inland water security is highly influenced by the amount of ships coming and going through our ports. Managing such an amount of water transport is not possible manually and hence satellite based surveillance plays a great role in identifying and classifying the types of ships."],
    ]
    const args5 = [
        ["Empowering Academicians:"],
        [""],
    ]
    return (
        <>
        <div className='section-bar' style={{ position: 'sticky', zIndex:'4'}}>
            <button id='btn-1' onClick={handleClick1}>Agriculture</button >
            <button id='btn-2' onClick={handleClick2}>Infrastructure</button >
            <button id='btn-3' onClick={handleClick3}>Environment</button >
            <button id='btn-4' onClick={handleClick4}>Defense</button >
            <button id='btn-5' onClick={handleClick5}>Academia</button >
        </div>
        <div className='container' style={{backgroundColor: '#EFEAF4', marginTop: '-440px', paddingTop: '300px', position: 'relative', zIndex:'2', paddingBottom: '100px'}}>
            <div>
            <div className='section2' ref={ref1}>
                    <h1 style={{marginBottom: '50px'}}>{args2[0]}</h1>
                    <font className='section1-p'>
                    Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural<br/>production and pattern in order to guide users about famine, maximize market returns for smallholders,<br/>and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI<br/>and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users<br/>improve their crop yield and to reduce costs.
                    </font>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>Farm Wise Crop yield Estimation and Prediction</h2>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={agri2} style={{ borderRadius: 25}} alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Location Wise Soil Moisture Assessment</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={agri3} style={{ borderRadius: 25}} alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Predicting Optimum Time of Crop Harvest</h2>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={agri4} style={{ borderRadius: 25}} alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Spatial Planning Framework for Agri-waste to Bioenergy</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className='section2-rows'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={agri5} style={{ borderRadius: 25}} alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Quantifying GHG Emission and Carbon Credits</h2>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'  style={{backgroundColor: 'white', paddingBottom: '100px'}}>
                <div className='section1' ref={ref2}>
                    <h1>{args1[0]}</h1>
                    <font className='section1-p'>
                    Technology like Object detection and change detection is a boon for the infrastructure and<br/>retail industry. All the objects visible in satellite images like vehicles, roads, buildings etc, if<br/>utilized properly hold a massive potential in this industry. Solutions like Road Network Planning,<br/> Asset Monitoring (Detection Of Roads/Buildings), Monitoring Urbanisation, Base Map<br/>Generation are just the start point. Few use cases to mention are
                    </font>
                    <div className='section1-details'>
                        <div className='section1-details-image'>
                            <img src={carPark} style={{width: 835, borderRadius: 25, height: 478}}  alt=''></img>
                        </div>
                        <div className='section1-details-text' style={{paddingTop: 70}}>
                            <h2>{args1[2]}</h2>
                            <p style={{paddingTop: 20}}>
                            {args1[3]}
                            <br/>
                            {args1[4]}
                            </p>
                        </div>
                        
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-image'>
                        <img src={mapImg} style={{width: 835, borderRadius: 25, height: 478}}  alt=''></img>
                        </div>
                        <div className='section1-details-text' style={{paddingTop: 70}}>
                            <h2>{args1[5]}</h2>
                            <p style={{paddingTop: 20}}>
                            {args1[6]}
                            </p>
                        </div>
                        
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-image'>
                        <img src={mapBlue} style={{width: 835, borderRadius: 25, height: 478}}  alt=''></img>
                        </div>
                        <div className='section1-details-text' style={{paddingTop: 80}}>
                            <h2>{args1[7]}</h2>
                            <p style={{paddingTop: 20}}>
                            {args1[8]}
                            </p>
                        </div>
                        
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-image'>
                        <img src={image1} style={{width: 835, borderRadius: 25, height: 478}}  alt=''></img>
                        </div>
                        <div className='section1-details-text' style={{paddingTop: 70}}>
                            <h2>{args1[9]}</h2>
                            <p style={{paddingTop: 20}}>
                            {args1[10]}
                            </p>
                        </div>
                        
                    </div>
                </div>
        </div>
        <div className='container'  style={{backgroundColor: '#EFEAF4', paddingBottom: '100px'}}>
                <div className='section2' ref={ref3}>
                    <h1>{args3[0]}</h1>
                    <font className='section1-p'>
                    In today's time with one press of the button, one swipe left or right, you can open up new<br/> worlds in seconds. If the same technology is put in monitoring natural resources, it can be<br/> used quite efficiently to monitor climate change and natural disaster hit areas.
                    </font>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={image2} style={{width: 680, borderRadius: 25, height: 400}}  alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>{args3[2]}</h2>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={image3} style={{width: 680, borderRadius: 25, height: 400}}  alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Automatic Land Use Land Cover Classification </h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={image4} style={{width: 680, borderRadius: 25, height: 400}}  alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Forest Cover Classification</h2>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={image5} style={{width: 680, borderRadius: 25, height: 400}}  alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Automatic Flood Inundation Mapping</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={image6} style={{width: 680, borderRadius: 25, height: 400}}  alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Managing & Monitoring Timber Forest Tonnage</h2>
                            </div>
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>
                            <img src={image7} style={{width: 680, borderRadius: 25, height: 400}}  alt=''></img>
                            </div>
                            <div className='section2-details-text'>
                                <h2>Surface and Ground Water Monitoring</h2>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
        <div className='container'  style={{backgroundColor: 'white', paddingBottom: '100px'}}>
                <div className='section1' ref={ref4}>
                    <h1>{args4[0]}</h1>
                    <font className='section1-p'>
                    Defense agencies acquire enormous amounts of visual surveillance data a day from various<br/> sources and hence the challenge remains not collecting the data, but processing it for <br/>strategic information, and this is where machine vision and AI could be of use. AI based<br/>analytics, therefore, helps defense leaders make better decisions by identifying objects of <br/>military significance:
                    </font>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>{args4[2]}</h2>
                            <p>
                            A person trying to monitor and analyze the traffic pattern of vehicles moving frequently to and from military installation manually would take time to identify the vehicles of interest and further pass on the information. But an algorithm based on machine learning would be able to establish the pattern of regular flux of cars moving and thus if the change in cars pattern is observed, it would automatically raise an anomaly and would alert the person of this change.
                            </p>
                        </div>
                        <div className='section1-details-image'>
                        <img src={def1} style={{width: 835, borderRadius: 25, height: 480}} alt=''></img>
                        </div>
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>Tunnel Detection using Synthetic Aperture Radar (SAR)</h2>
                            <p>
                            Data involves analyzing the radar signals collected by SAR satellites or sensors to identify underground tunnels or man-made structures hidden beneath the Earth's surface. SAR technology can penetrate the ground and provide valuable information about subsurface structures.
                            </p>
                        </div>
                        <div className='section1-details-image'>
                        <img src={def2} style={{width: 835, borderRadius: 25, height: 480}} alt=''></img>
                        </div>
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>Border Monitoring</h2>
                            <p>
                            It takes humongous effort to guard the border area currently. With the help of Geo-AI platform, sensitive areas of borders could be 
                            </p>
                        </div>
                        <div className='section1-details-image'>
                        <img src={def3} style={{width: 835, borderRadius: 25, height: 480}} alt=''></img>
                        </div>
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>Settlements Detection</h2>
                            <p>: Identifying the change in settlements in any tactical area on a daily basis is of utmost importance.</p>
                        </div>
                        <div className='section1-details-image'>
                        <img src={def4} style={{width: 835, borderRadius: 25, height: 480}} alt=''></img>
                        </div>
                    </div>
                </div>
        </div>
        <div className='container'  style={{backgroundColor: '#EFEAF4', paddingBottom: '100px'}}>
                <div className='section1' ref={ref5} style={{marginBottom:'200px'}}>
                    <h1>{args5[0]}</h1>
                    <font className='section1-p'>
                    People from the academic fraternity face regular challenges in basic satellite data preparation and end up<br/>wasting more than 70% of project time in just preparing the data for analysis. There are multiple image pre-<br/>processing tasks like image mosaic, layer stack, radiometric correction, image enhancement, study area <br/>extraction, estimation of spectral indices for analysis etc,. All these tasks are fragmented at different<br/> platforms, so managing the data for the project takes a toll. With our platform, all such tasks are available at<br/> a single click approach and entire work can be managed with complete automation.
                    </font>
                </div>
            </div>
        </>
    )
}
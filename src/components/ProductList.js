import React, {useRef, useEffect} from 'react'
import image3 from '../assets/Frame691.png';
import eclips from '../assets/Ellipse 53.png';
import img1 from '../assets/Rectangle 11.png';
import img2 from '../assets/Rectangle 10.png';
import img3 from '../assets/Rectangle 10 (1).png';
import img4 from '../assets/Rectangle 10 (2).png';
import img5 from '../assets/Rectangle 10 (3).png';
import img6 from '../assets/Rectangle 11 (1).png';
import img7 from '../assets/Rectangle 12.png';
import img8 from '../assets/Rectangle 13.png';
import img9 from '../assets/Rectangle 14.png';
import img10 from '../assets/Rectangle 12(4).png';
import img11 from '../assets/Rectangle 12 (1).png';
import img12 from '../assets/Rectangle 12 (2).png';
import img13 from '../assets/Rectangle 12 (3).png';


export default function ProductList() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    

    const handleClick1 = () => {
        ref1.current?.scrollIntoView({ behavior: 'auto'}); 
    };

    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'auto'}); 
    };

    const handleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'auto'}); 
    };

    const args1 = [
        {id: 0, text: 'Spatial Indices'},
        {id: 1, text: "Accelerate data retrieval and analysis with spatial indices. Our AI tool organizes geospatial data efficiently, enabling quick access to specific regions of interest based on spatial coordinates.."},
        {id: 2, text: img1},
        {id: 3, text: 'Mosaic'},
        {id: 4, text: "Seamlessly merge multiple raster datasets into a single composite image. Our AI technology ensures a smooth transition between datasets, creating a coherent and continuous mosaic."},
        {id: 5, text: image3},
        {id: 6, text: 'Merge'},
        {id: 7, text: "Combine diverse geospatial data sources effortlessly. Our AI-powered merge function enables the integration of multiple datasets, empowering comprehensive analysis and decision-making."},
        {id: 8, text: img2},
        {id: 9, text: 'Cloud Detection'},
        {id: 10, text: "Identify and mask cloud-covered areas in satellite imagery automatically. Our AI-driven cloud detection feature ensures accurate data analysis by excluding clouds from further processing, improving the reliability of your results."},
        {id: 11, text: img3},
        {id: 12, text: 'Layer Stacking'},
        {id: 13, text: "Combine multiple spectral bands from satellite imagery into a single multi-band image. Our layer stacking capability allows for comprehensive analysis by leveraging different bands, providing valuable insights into various aspects of the Earth's surface."},
        {id: 14, text: img4},
        ]
    const args2 = [
        {id: 0, text: 'Object Detection & Feature Extraction'},
        {id: 1, text: "Effortlessly locate and identify objects of interest within  satellite images for surveillance, monitoring, and analysis."},
        {id: 2, text: img5},
        {id: 3, text: 'Automated Image Registration & Sensor Fusion'},
        {id: 4, text: "Precisely align and fuse images from various sources, enabling comprehensive analysis and comparisons."},
        {id: 5, text: img6},
        {id: 6, text: 'Real-Time Change Detection'},
        {id: 7, text: "Stay ahead with continuous monitoring and instant detection of changes in geospatial data."},
        {id: 8, text: img7},
        {id: 9, text: 'Feature Extraction'},
        {id: 10, text: "Uncover crucial insights by automatically extracting patterns and characteristics from extensive datasets."},
        {id: 11, text: img8},
        {id: 12, text: 'Land Use Classification'},
        {id: 13, text: "Categorize land cover types automatically for informed decisions in diverse fields."},
        {id: 14, text: img9},
        ]
    const args3 = [
        {id: 0, text: 'Agriculture'},
        {id: 1, text: "   Empower your agricultural operations with data-driven insights. Analyse AI provides precise crop monitoring, yield prediction, and disease detection. Optimize resource allocation, enhance productivity, and make informed decisions for sustainable agriculture."},
        {id: 2, text: img10},
        {id: 3, text: 'Infrastructure'},
        {id: 4, text: "Streamline infrastructure development and maintenance with our advanced analytics tools. From asset monitoring and predictive maintenance to urban planning and traffic management, Analyse AI enables smart decision-making to ensure safer, more efficient cities."},
        {id: 5, text: img11},
        {id: 6, text: 'Environment'},
        {id: 7, text: "Safeguard the environment with powerful analytics capabilities. Analyse AI facilitates environmental monitoring, climate change analysis, and natural disaster assessment. Make proactive decisions for conservation and sustainable resource management."},
        {id: 8, text: img12},
        {id: 9, text: 'Defense'},
        {id: 10, text: "Bolster national security and defense operations with data-driven insights. Analyse AI offers intelligence gathering, threat detection, and anomaly recognition. Strengthen situational awareness and strategize with confidence."},
        {id: 11, text: img13},
        ]

    useEffect(() => { 
        var btn1 = document.getElementById('btn-11');
        var btn2 = document.getElementById('btn-21');
        var btn3 = document.getElementById('btn-31');
        var bar = document.getElementById('product-bar');
        document.addEventListener('scroll', function () {
            var rect = bar.getBoundingClientRect();
            if(window.scrollY>=0) {
                btn1.classList.add('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
            } if(window.scrollY>=6292) {
                btn1.classList.remove('active');
                btn2.classList.add('active');
                btn3.classList.remove('active');
            } if(window.scrollY>=10892) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.add('active');
            }
            if(rect.top<200)
            {
                bar.style.opacity = '0';
            } else {
                bar.style.opacity = '1';
            }
        });

        function createScrollHandler(elementId,holder) {
            return function() {
                const div = document.getElementById(elementId);
                const hold = document.getElementById(holder);
                if(div)
                {
                    const divTop = div.getBoundingClientRect().top;
                    const holdTop = hold.getBoundingClientRect().top;
                    div.scrollTop = divTop - holdTop -150;
                }
            };
            }
          
        window.addEventListener("scroll", createScrollHandler('ppa-img','holder1'), false);
        window.addEventListener("scroll", createScrollHandler('ppa-img1','holder2'), false);
        window.addEventListener("scroll", createScrollHandler('ppa-img2','holder3'), false);

    }, []);

    return (  
        <>
    <div className='container' style={{position: 'relative', zIndex: '1', paddingTop: '20px' ,backgroundColor: 'white'}}>
        <div className='product-bar'>
            <div>
                <button id='btn-11' onClick={handleClick1}><font>Prepare</font> AI</button>
            </div>
            <div>
                <button id='btn-21' onClick={handleClick2}><font>Process</font> AI</button>
            </div>
            <div>
                <button id='btn-31' onClick={handleClick3}><font>Analyse</font> AI</button>
            </div>
        </div>
        <div className='ppa'>
                <div className='default-product-bar' id='product-bar'>
                    <p>
                        <font className='default-details'>With Prepare AI, you can now handle basic <br/>satellite data preparation jobs in just one click,  <br/>leaving you more time for insightful analysis and  <br/>decision-making. </font>
                    </p>
                    <p>
                        <font className='default-details'>Depending on the information to be extracted from <br/> images, we apply different technology on the satellite  <br/>images to extract the base data from satellite images. Like  <br/>buildings, roads, vehicles, water bodies, land use etc. </font>
                    </p>
                    <p>
                        <font className='default-details'>Data which is obtained using Process AI, can further  <br/>be used by various stakeholders. Analyze AI provides <br/> advanced analytics by providing timely actionable <br/> insights and helping in decision making</font>
                    </p>
                </div>
        </div>
        <div className='product-ai-holder' >
            <div className='product-bar-small'>
                <font>Prepare</font> AI
                <p>
                    With Prepare AI, you can now handle basic satellite data preparation jobs in just one click, leaving you more time for insightful analysis and decision-making. Unlock the true potential of your geospatial data with our powerful and user-friendly automation tool like:
                </p>
            </div>
            <div ref={ref1} className='ppa-holder' id="holder1">
                <div className='ppa-right'>
                    <div className='ppa-not-none'>
                        <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args1[0].text}
                        </h3>
                        <p>
                        {args1[1].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args1[2].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args1[3].text}
                        </h3>
                        <p>
                        {args1[4].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args1[8].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            
            <div className='ppa-holder'>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args1[9].text}
                        </h3>
                        <p>
                        {args1[10].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args1[11].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args1[12].text}
                        </h3>
                        <p>
                        {args1[13].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args1[14].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            <div className='product-bar-small'>
                <font>Process</font> AI
                <p>
                Depending on the information to be extracted from images, we apply different technology on the satellite images to extract the base data from satellite images. Like buildings, roads, vehicles, water bodies, land use etc. All these data acts as a base data for further analysis in different domains and industry verticals.
                </p>
            </div>
            <div ref={ref2} className='ppa-holder' id="holder2">
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args2[2].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div  className='ppa-not-none' style={{paddingLeft: '20px'}}>
                    <img src={eclips}  alt='' className='eclips-product' style={{left: '-10px'}}/>
                        <h3>
                        {args2[0].text}
                        </h3>
                        <p>
                        {args2[1].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args2[5].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div  className='ppa-not-none' style={{paddingLeft: '20px'}}>
                    <img src={eclips}  alt='' className='eclips-product'  style={{left: '-10px'}}/>
                        <h3>
                        {args2[3].text}
                        </h3>
                        <p>
                        {args2[4].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args2[8].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div  className='ppa-not-none' style={{paddingLeft: '20px'}}>
                    <img src={eclips}  alt='' className='eclips-product'  style={{left: '-10px'}}/>
                        <h3>
                        {args2[6].text}
                        </h3>
                        <p>
                        {args2[7].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args2[11].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div  className='ppa-not-none' style={{paddingLeft: '20px'}}>
                    <img src={eclips}  alt='' className='eclips-product'  style={{left: '-10px'}}/>
                        <h3>
                        {args2[9].text}
                        </h3>
                        <p>
                        {args2[10].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args2[14].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div  className='ppa-not-none' style={{paddingLeft: '20px'}}>
                    <img src={eclips}  alt='' className='eclips-product' style={{left: '-10px'}}/>
                        <h3>
                        {args2[12].text}
                        </h3>
                        <p>
                        {args2[13].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className='product-bar-small'>
                <font>Analyse</font> AI
                <p>
                Although it's a sector agnostic technology, currently we are focusing on these 4 industry verticals: Data which is obtained using Process AI, can further be used by various stakeholders, Govt. organizations, B2B corporate enterprises and individuals. Analyze AI provides advanced analytics of the base data providing timely actionable insights and helping in decision making
                </p>
            </div>
            <div ref={ref3} className='ppa-holder' id="holder3">
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args3[0].text}
                        </h3>
                        <p>
                        {args3[1].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args3[2].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args3[3].text}
                        </h3>
                        <p>
                        {args3[4].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args3[5].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args3[6].text}
                        </h3>
                        <p>
                        {args3[7].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args3[8].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
            <div className='ppa-holder'>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                    <img src={eclips}  alt='' className='eclips-product'/>
                        <h3>
                        {args3[9].text}
                        </h3>
                        <p>
                        {args3[10].text}
                        </p>
                    </div>
                </div>
                <div className='ppa-img'>
                    <div className='center-img'>
                        <img src={args3[11].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

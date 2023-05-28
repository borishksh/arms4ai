import React, {useRef, useEffect} from 'react'

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
        ["Agriculture and Energy"],
        ["Technology like Object detection and change detection is a boon for the infrastructure and retail industry. All the objects visible in satellite images like vehicles, roads, buildings etc, if utilized properly hold a massive potential in this industry. Solutions like Road Network Planning, Asset Monitoring (Detection Of Roads/Buildings), Monitoring Urbanisation, Base Map Generation are just the start point."],
        ["Farm Wise Crop Yield Estimation and Prediction"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users improve their crop yield and to reduce costs."],
        ["Location Wise Sucrose Prediction"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users improve their crop yield and to reduce costs."],
        ["Crop Residue and"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users improve their crop yield and to reduce costs."],
    ]
    const args2 = [
        ["Infrastructure & Real Estate"],
        ["Technology like Object detection and change detection is a boon for the infrastructure and retail industry. All the objects visible in satellite images like vehicles, roads, buildings etc, if utilized properly hold a massive potential in this industry. Solutions like Road Network Planning, Asset Monitoring (Detection Of Roads/Buildings), Monitoring Urbanisation, Base Map Generation are just the start point."],
        ["Farm Wise Crop Yield Estimation and Prediction"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess  and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures."],
        ["Location Wise Soil Moisture Assessment"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess  and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures."],
        ["Predicting Optimum Time of Crop Harvest"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess  and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures."],
        ["Spatial Planning Framework for Agri-waste to Bioenergy"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess  and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures."],
    ]
    const args3 = [
        ["Dealing With Environmental Concerns"],
        ["In today's time with one press of the button, one swipe left or right, you can open up new worlds in seconds. If the same technology is put in monitoring natural resources, it can be used quite efficiently to monitor climate change and natural disaster hit areas."],
        ["Tree Inventory management/Tree Count Analysis"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users improve their crop yield and to reduce costs."],
        ["Automatic Land Use Land Cover Classification"],
        ["Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users improve their crop yield and to reduce costs."],
    ]
    return (
        <>
            <div className='section-bar'>
                <button id='btn-1' onClick={handleClick1}>Agriculture</button >
                <button id='btn-2' onClick={handleClick2}>Infrastructure</button >
                <button id='btn-3' onClick={handleClick3}>Environment</button >
                <button id='btn-4' onClick={handleClick4}>Defense</button >
                <button id='btn-5' onClick={handleClick5}>Academia</button >
            </div>
            <div>
                <div className='section1' ref={ref1}>
                    <h1>{args1[0]}</h1>
                    <p className='section1-p'>
                    {args1[1]}
                    </p>
                    <div className='section1-details'>
                        <div className='section1-details-image'>

                        </div>
                        <div className='section1-details-text'>
                            <h2>{args1[2]}</h2>
                            <p>
                            {args1[3]}
                            </p>
                        </div>
                        
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-image'>

                        </div>
                        <div className='section1-details-text'>
                            <h2>{args1[4]}</h2>
                            <p>
                            {args1[5]}
                            </p>
                        </div>
                        
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-image'>

                        </div>
                        <div className='section1-details-text'>
                            <h2>{args1[6]}</h2>
                            <p>
                            {args1[7]}
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className='section2' ref={ref2}>
                    <h1>{args2[0]}</h1>
                    <p className='section1-p'>
                    {args2[1]}
                    </p>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[2]}</h2>
                                <p>
                                {args2[3]}
                                </p>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[4]}</h2>
                                <p>
                                {args2[5]}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[6]}</h2>
                                <p>
                                {args2[7]}
                                </p>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[8]}</h2>
                                <p>
                                {args2[9]}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='section1' ref={ref3}>
                    <h1>{args3[0]}</h1>
                    <p className='section1-p'>
                    {args3[1]}
                    </p>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>{args3[2]}</h2>
                            <p>
                            {args3[3]}
                            </p>
                        </div>
                        <div className='section1-details-image'>

                        </div>
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>{args3[4]}</h2>
                            <p>
                            {args3[5]}
                            </p>
                        </div>
                        <div className='section1-details-image'>

                        </div>
                    </div>
                </div>
                <div className='section2' ref={ref4}>
                    <h1>{args2[0]}</h1>
                    <p className='section1-p'>
                    {args2[1]}
                    </p>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[2]}</h2>
                                <p>
                                {args2[3]}
                                </p>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[4]}</h2>
                                <p>
                                {args2[5]}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='section2-row'>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[6]}</h2>
                                <p>
                                {args2[7]}
                                </p>
                            </div>
                            
                        </div>
                        <div className='section2-details'>
                            <div className='section2-details-image'>

                            </div>
                            <div className='section2-details-text'>
                                <h2>{args2[8]}</h2>
                                <p>
                                {args2[9]}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='section1' ref={ref5}>
                    <h1>{args3[0]}</h1>
                    <p className='section1-p'>
                    {args3[1]}
                    </p>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>{args3[2]}</h2>
                            <p>
                            {args3[3]}
                            </p>
                        </div>
                        <div className='section1-details-image'>

                        </div>
                    </div>
                    <div className='section1-details'>
                        <div className='section1-details-text'>
                            <h2>{args3[4]}</h2>
                            <p>
                            {args3[5]}
                            </p>
                        </div>
                        <div className='section1-details-image'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
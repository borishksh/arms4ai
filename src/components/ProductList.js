import React, {useRef, useEffect} from 'react'
import image2 from '../assets/ai-robot-1.jpg';
import image3 from '../assets/ai-robot-2.jpg';
import image4 from '../assets/ai-robot-3.jpg';

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
        {id: 0, text: 'Object Detection'},
        {id: 1, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 2, text: image2},
        {id: 3, text: 'Object Detection'},
        {id: 4, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 5, text: image3},
        {id: 6, text: 'Object Detection'},
        {id: 7, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 8, text: image4},
        ]
    const args2 = [
          {id: 0, text: 'Object Detection'},
        {id: 1, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 2, text: image2},
        {id: 3, text: 'Object Detection'},
        {id: 4, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 5, text: image3},
        ]
    const args3 = [
          {id: 0, text: 'Object Detection'},
        {id: 1, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 2, text: image2},
        {id: 3, text: 'Object Detection'},
        {id: 4, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 5, text: image3},
        {id: 6, text: 'Object Detection'},
        {id: 7, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
        {id: 8, text: image4},
        ]

    useEffect(() => { 
        var btn1 = document.getElementById('btn-11');
        var btn2 = document.getElementById('btn-21');
        var btn3 = document.getElementById('btn-31');
        document.addEventListener('scroll', function () {
            if(window.scrollY-ref1.current?.offsetTop>=-30) {
                btn1.classList.add('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
            } if(window.scrollY-ref2.current?.offsetTop>=-30) {
                btn1.classList.remove('active');
                btn2.classList.add('active');
                btn3.classList.remove('active');
            } if(window.scrollY-ref3.current?.offsetTop>=-30) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.add('active');
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
                <div className='default-product-bar'>
                    <p>
                        <font className='default-details'>Remotely sensed images often contain noise and errors</font>, At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stackin.
                    </p>
                    <p>
                        <font className='default-details'>Remotely sensed images often contain noise and errors</font>, At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stackin.
                    </p>
                    <p>
                        <font className='default-details'>Remotely sensed images often contain noise and errors</font>, At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stackin.
                    </p>
                </div>
        </div>
        <div className='product-ai-holder'>
            <div ref={ref1} className='ppa-holder' id="holder1">
                <div className='ppa-right'>
                    <div className='ppa-not-none'>
                        <h3>
                        {args1[0].text}
                        </h3>
                        <p>
                        {args1[1].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                    <div className='ppa-none'>
                    </div>
                    <div  className='ppa-not-none'>
                        <h3>
                        {args1[6].text}
                        </h3>
                        <p>
                        {args1[7].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                </div>
                <div className='ppa-center' id='ppa-img'>
                    <div className='center-img'>
                        <img src={args1[2].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                    <div className='center-img'>
                        <img src={args1[5].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                    <div className='center-img'>
                        <img src={args1[8].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div className='ppa-none'>
                    </div>
                    <div  className='ppa-not-none'>
                        <h3>
                        {args1[3].text}
                        </h3>
                        <p>
                        {args1[4].text}
                        </p>
                    </div>
                    <div className='ppa-none'>
                    </div>
                </div>
            </div>
            <div ref={ref2} className='ppa-holder' id="holder2">
                <div className='ppa-right'>
                    <div className='ppa-none'>
                    </div>
                    <div  className='ppa-not-none'>
                        <h3>
                        {args2[3].text}
                        </h3>
                        <p>
                        {args2[4].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                </div>
                <div className='ppa-center'  id='ppa-img1'>
                    <div className='center-img'>
                        <img src={args1[2].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                    <div className='center-img'>
                        <img src={args1[5].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                        <h3>
                        {args2[0].text}
                        </h3>
                        <p>
                        {args2[1].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                    <div className='ppa-none'>
                    </div>
                </div>
            </div>
            <div ref={ref3} className='ppa-holder' id="holder3">
                <div className='ppa-right'>
                    <div  className='ppa-not-none'>
                        <h3>
                        {args3[0].text}
                        </h3>
                        <p>
                        {args3[1].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                    <div className='ppa-none'>
                    </div>
                    <div className='ppa-not-none'>
                        <h3>
                        {args3[6].text}
                        </h3>
                        <p>
                        {args3[7].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                </div>
                <div className='ppa-center'  id='ppa-img2'>
                    <div className='center-img'>
                        <img src={args1[2].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                    <div className='center-img'>
                        <img src={args1[5].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                    <div className='center-img'>
                        <img src={args1[8].text} alt="arms4ai" className='not-ripple1'/>
                    </div>
                </div>
                <div className='ppa-right'>
                    <div className='ppa-none'>
                    </div>
                    <div  className='ppa-not-none'>
                        <h3>
                        {args3[3].text}
                        </h3>
                        <p>
                        {args3[4].text}
                        </p>
                        <div className='ppa-center-small'>

                        </div>
                    </div>
                    <div className='ppa-none'>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

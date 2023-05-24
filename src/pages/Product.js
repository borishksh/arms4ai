import React, {Component} from 'react'
import image1 from '../assets/Frame691.png';
import image2 from '../assets/Group53.png';
import image3 from '../assets/Group54.png';
import image4 from '../assets/Group55.png';
import ProductList from '../components/ProductList';

export default class Product extends Component {
    state = {
      showDiv1 : false,
      setShowDiv1 : false,
      showDiv2 : false,
      setShowDiv2 : false,
      showDiv3 : false,
      setShowDiv3 : false,
      showDiv4 : true,
      setShowDiv4 : true,
  };

  handleButtonClick = (targetState, settargetState) => {
      this.setState({ showDiv1: Object.keys(this.state)[0] === targetState ? true : false });
      this.setState({ setShowDiv1: Object.keys(this.state)[1] === settargetState ? true : false });
      this.setState({ showDiv2: Object.keys(this.state)[2] === targetState ? true : false });
      this.setState({ setShowDiv2: Object.keys(this.state)[3] === settargetState ? true : false });
      this.setState({ showDiv3: Object.keys(this.state)[4] === targetState ? true : false });
      this.setState({ setShowDiv3: Object.keys(this.state)[5] === settargetState ? true : false });
      this.setState({ showDiv4: Object.keys(this.state)[6] === targetState ? true : false });
      this.setState({ setShowDiv4: Object.keys(this.state)[7] === settargetState ? true : false });
  };
  render() {
    const args1 = [
    {id: 0, text: 'Object Detection'},
    {id: 1, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 2, text: image1},
    {id: 3, text: 'Object Detection'},
    {id: 4, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 5, text: image1},
    {id: 6, text: 'Object Detection'},
    {id: 7, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 8, text: image1},
    ]
    const args2 = [
      {id: 0, text: 'Object Detection'},
    {id: 1, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 2, text: image1},
    {id: 3, text: 'Object Detection'},
    {id: 4, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 5, text: image1},
    ]
    const args3 = [
      {id: 0, text: 'Object Detection'},
    {id: 1, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 2, text: image1},
    {id: 3, text: 'Object Detection'},
    {id: 4, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 5, text: image1},
    {id: 6, text: 'Object Detection'},
    {id: 7, text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."},
    {id: 8, text: image1},
    ]
    return (
      <div className='container'>
        <div className='about-hero'>
          <h1>
            Geo - AI Precision Made Simple
          </h1>
          <p className='about-details'>
          Developing Geospatial-AI Platform to prepare, process and analyze satellite images  using  the power of deep technology and AI in information extraction process that saves 70% of cost, manpower and efforts. Developing Geospatial-AI Platform to prepare, process and analyze satellite images.
          </p>
          <div className='product-stat'>
              <div className='product-stat-item'>
                <img src={image2} alt='arms4ai'/>
                <div>
                  <h4>
                  70%
                  </h4>
                  <p>
                  Reduction in time and effort
                  </p>
                </div>
              </div>
              <div className='product-stat-item'>
                <img src={image3} alt='arms4ai'/>
                <div>
                  <h4>
                  90%
                  </h4>
                  <p>
                  Accuracy Delivered
                  </p>
                </div>
              </div>
              <div className='product-stat-item'>
                <img src={image4} alt='arms4ai'/>
                <div>
                  <h4>
                  15 Mins
                  </h4>
                  <p>
                  or less time to analyze
                  </p>
                </div>
              </div>
          </div>
          <div className='about-hero-img'>
            <img src={image1} alt='arms4ai' />
          </div>
        </div>
        <div className='product-bar'>
          <div>
          <button  onClick={() => this.handleButtonClick('showDiv1','setShowDiv1')} className={this.state.showDiv1 === true || this.state.showDiv4 === true ? 'active' : ''}><font>Prepare</font> AI</button >
          <font className={this.state.showDiv1 === true ? 'product-bar-details' : 'product-bar-details-out'}>Remotely sensed images often contain noise and errors.</font>
          </div>
          <div>
          <button  onClick={() => this.handleButtonClick('showDiv2','setShowDiv2')} className={this.state.showDiv2 === true || this.state.showDiv4 === true ? 'active' : ''}><font>Process</font> AI</button >
          <font className={this.state.showDiv2 === true ? 'product-bar-details' : 'product-bar-details-out'}>Remotely sensed images often contain noise and errors.</font>
          </div>
          <div>
          <button  onClick={() => this.handleButtonClick('showDiv3','setShowDiv3')} className={this.state.showDiv3 === true || this.state.showDiv4 === true ? 'active' : ''}><font>Analyse</font> AI</button >
          <font className={this.state.showDiv3 === true ? 'product-bar-details' : 'product-bar-details-out'}>Remotely sensed images often contain noise and errors.</font>
          </div>
        </div>
        <div className='ppa'>
            {this.state.showDiv1 && <div><ProductList {...args1}/></div>}
            {this.state.showDiv2 && <div><ProductList {...args2}/></div>}
            {this.state.showDiv3 && <div><ProductList {...args3}/></div>}
            {this.state.showDiv4 && 
                  <div>
                    <div className='default-product-bar'>
                      <p>
                      Remotely sensed images often contain noise and errors, requiring image pre-processing techniques. At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stackin.
                      </p>
                      <p>
                      Remotely sensed images often contain noise and errors, requiring image pre-processing techniques. At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stackin.
                      </p>
                      <p>
                      Remotely sensed images often contain noise and errors, requiring image pre-processing techniques. At ARMS 4 AI, our one click automated tools streamline the process, including basic satellite image preparation tasks such as layer stackin.
                      </p>
                    </div>
                    <div className='default-product'>

                    </div>
                  </div>
                }
        </div>
      </div>
    )
  }
}

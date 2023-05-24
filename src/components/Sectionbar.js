import React, { Component } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default class Sectionbar extends Component {
    state = {
        showDiv1 : true,
        setShowDiv1 : true,
        showDiv2 : false,
        setShowDiv2 : false,
        showDiv3 : false,
        setShowDiv3 : false,
        showDiv4 : false,
        setShowDiv4 : false,
        showDiv5 : false,
        setShowDiv5 : false,
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
        this.setState({ showDiv5: Object.keys(this.state)[8] === targetState ? true : false });
        this.setState({ setShowDiv5: Object.keys(this.state)[9] === settargetState ? true : false });
    };
    
  render() {
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
      <><div className='section-bar'>
            <button  onClick={() => this.handleButtonClick('showDiv1','setShowDiv1')} className={this.state.showDiv1 === true ? 'active' : ''}>Agriculture</button >
            <button  onClick={() => this.handleButtonClick('showDiv2','setShowDiv2')} className={this.state.showDiv2 === true ? 'active' : ''}>Infrastructure</button >
            <button  onClick={() => this.handleButtonClick('showDiv3','setShowDiv3')} className={this.state.showDiv3 === true ? 'active' : ''}>Environment</button >
            <button  onClick={() => this.handleButtonClick('showDiv4','setShowDiv4')} className={this.state.showDiv4 === true ? 'active' : ''}>Defense</button >
            <button  onClick={() => this.handleButtonClick('showDiv5','setShowDiv5')} className={this.state.showDiv5 === true ? 'active' : ''}>Academia</button >
        </div>
        <div>
            {this.state.showDiv1 && <div><Section1 {...args1}/></div>}
            {this.state.showDiv2 && <div><Section2 {...args2}/></div>}
            {this.state.showDiv3 && <div><Section3 {...args3}/></div>}
            {this.state.showDiv4 && <div><Section2 {...args2}/></div>}
            {this.state.showDiv5 && <div><Section1 {...args1}/></div>}
        </div>
    </>
    )
  }
}

import React from 'react'

import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";

import { easeQuadInOut } from "d3-ease";

import AnimatedProgressProvider from "../assets/js/AnimatedProgressProvider";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//CSS

import "react-circular-progressbar/dist/styles.css";

function About() {



    return (

      

      <React.Fragment>
    <h2>About me!</h2>

      <p className="lead">Since my journey as a freelance designer began almost <b>4 years ago</b>, I have worked remotely for
        agencies, I have worked as a web developer for small and medium-sized companies and have collaborated with
        talented individuals to create digital products for commercial and consumer use. I have a confidence
        calm, a natural curiosity and constant work to improve my skills, a problem of
        design at once.</p>

        <h3>My skills</h3>

        <Row>

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={90} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#2DAAFF', trailColor: '#d8d8d8', pathColor: '#2DAAFF' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">Photoshop</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={75} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#FF9A00', trailColor: '#d8d8d8', pathColor: '#FF9A00' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">Illustrator</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#A662F1', trailColor: '#d8d8d8', pathColor: '#A662F1' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">Figma</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={70} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#292E31', trailColor: '#d8d8d8', pathColor: '#292E31' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">Balsamiq</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={80} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#D91B5B', trailColor: '#d8d8d8', pathColor: '#D91B5B' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">UI Design</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={75} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#28B573', trailColor: '#d8d8d8', pathColor: '#28B573' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">UX Design</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={95} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#0073AA', trailColor: '#d8d8d8', pathColor: '#0073AA' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">WordPress</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={85} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#DD4B25', trailColor: '#d8d8d8', pathColor: '#DD4B25' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">HTML</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#2173F7', trailColor: '#d8d8d8', pathColor: '#2173F7' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">CSS</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={40} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#EFD81D', trailColor: '#d8d8d8', pathColor: '#EFD81D' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">JavaScript</span>
          </Col>

          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={25} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#02D1F7', trailColor: '#d8d8d8', pathColor: '#02D1F7' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">React js</span>
          </Col>


          {/* Col */}

          <Col sm={12} md={2} lg={2} xl={2} className="text-center mt-4">
            <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={2} easingFunction={easeQuadInOut} >
            {value => { const roundedValue = Math.round(value);
              return ( 
                <CircularProgressbarWithChildren value={value} text={`${roundedValue}%`} strokeWidth={2} styles={buildStyles({ pathTransition: "none", textColor: '#533B78', trailColor: '#d8d8d8', pathColor: '#533B78' })} > 
            
                </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider> 
            <span className="lead">Bootstrap</span>
          </Col>

        </Row>

        

        

      </React.Fragment>
    );
  }

export default About;
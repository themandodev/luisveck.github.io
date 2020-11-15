// Bootstrap React Importing components

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

// Importing routers

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// Importing Font Awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';



// Importing sections

// import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Importing custom css

import './App.css';

// Importing assets

import Picture from './assets/img/profile-picture.jpg';

function App() {
  return (

    <div className="App">

      <Container>
        <Router>
          
            <Row className="no-gutters row-center-align h-100">
              <Col sm={12} md={4} lg={4} xl={4}>
                <Card bg="dark" className="border-0 h-100 card-rounded-left">
                  <Card.Body className="text-center">
                    <Image src={Picture} roundedCircle width={200} />

                    

                    <h4 className="font-weight-bold mt-4 text-white">Luis Aponte</h4>
                    <p className="text-uppercase small text-white">Web Developer</p>

                    <a href="https://facebook.com/luemsoft" className="text-white mx-1">
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>

                    <a href="https://twitter.com/luemdesign" className="text-white mx-1">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>

                    <a href="https://instagram.com/luemsoft" className="text-white mx-1">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>

                    <a href="https://github.com/luisveck" className="text-white mx-1">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>

                    <a href="https://behance.com/luemdesign" className="text-white mx-1">
                      <FontAwesomeIcon icon={faBehance} size="lg" />
                    </a>
                    
                  
                    <Nav defaultActiveKey="/" className="flex-column py-4">
                      {/* <Nav.Link href="/"> <Link to="/"> Home </Link> </Nav.Link> */}
                      <Nav.Link eventKey="link-1"> <Link className="text-white link" to="/"> About </Link> </Nav.Link>
                      <Nav.Link eventKey="link-2"> <Link className="text-white link" to="/projects"> Projects </Link> </Nav.Link>
                      <Nav.Link eventKey="link-3"> <Link className="text-white link" to="/contact"> Contact </Link> </Nav.Link>
                    </Nav>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={8} lg={8} xl={8}>
                <Card  bg="light" className="border-0 h-100 card-rounded-right">
                  <Card.Body>
                    <Switch>
                      {/* <Route path="/" component={ Home } />  */}
                      <Route exact path="/" component={ About } /> 
                      <Route path="/projects" component={ Projects } />
                      <Route path="/contact" component={ Contact } />
                    </Switch>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          
        </Router>
      </Container>
      
    </div>
  );
}

export default App;
// Bootstrap React Importing components

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

// Importing routers

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing sections

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Importing custom css

import './App.css';

function App() {
  return (

    <div className="App">

      <Container className="h-100">
        <Router>
          <Row className="no-gutters">
            <Col sm={12} md={4} lg={4} xl={4}>
              <Card bg="dark" className="rounded-0 border-0 col-height">
                <Card.Body className="text-center">
                  <Image src="https://via.placeholder.com/200x200" roundedCircle />

                  <h4 className="font-weight-bold mt-4">Luis Aponte</h4>
                  <p className="text-uppercase small">Web Developer</p>
                
                  <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/"> <Link to="/"> Home </Link> </Nav.Link>
                    <Nav.Link eventKey="link-1"> <Link to="/about"> About</Link> </Nav.Link>
                    <Nav.Link eventKey="link-2"> <Link to="/projects"> Projects </Link> </Nav.Link>
                    <Nav.Link eventKey="link-3"> <Link to="/contact"> Contact </Link> </Nav.Link>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={8} lg={8} xl={8}>
              <Card  bg="primary" className="rounded-0 border-0">
                <Card.Body>
                  <Switch>
                    <Route exact path="/" component={ Home } /> 
                    <Route path="/about" component={ About } /> 
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
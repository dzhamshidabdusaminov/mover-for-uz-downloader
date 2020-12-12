import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from './components/TopNav';
import HomePage from './components/HomePage';
import DownloadPage from './components/DownloadPage';
import FaqPage from './components/FaqPage';
import AboutPage from './components/AboutPage';
const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <TopNav />
          </Col>
        </Row>
        <Row className="main-body">
          <Col>
              <Switch>
                <Route exact path="/faq">
                  <FaqPage />
                </Route>
                <Route exact path="/about">
                  <AboutPage />
                </Route>
                <Route exact path="/:id">
                  <DownloadPage />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </Switch>
          </Col>
        </Row>
      </Container>
      </Router>
  )
}

export default App

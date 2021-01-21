import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import { Carousel, Button, Card } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./pages/Resume";




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/resume" component={Resume}></Route>
          <div>
            <Carousel className="carousel">
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="./images/hangman.png" />
                  <Card.Body>
                    <Card.Title className="title">Hangman Game</Card.Title>
                    <Card.Text>
                      <p>
                        <li>
                          Used HTML5 and CSS3 to create the visual of my hangman
                          game.
                        </li>
                        <li>Used Javascript for functionality of the game.</li>
                        <li>
                          Used Git throughout the process of building the game.
                        </li>
                        <li>Project deployed using GitHub Pages.</li>
                      </p>
                    </Card.Text>
                    <Button onClick= "window.location.href='https://jtother1.github.io/project-1/'">View App</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="./images/brew-buddy.png" />
                  <Card.Body>
                    <Card.Title>Brew-Buddy</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Drew up wireframes</li>
                        <li>
                          Used HTML5/CSS3/React/Javascript to create components
                          for the app.
                        </li>
                        <li>
                          Used a third party API and axios to fetch Information.
                        </li>
                        <li>
                          Utilized local storage for saving lists of breweries.
                        </li>
                        <li>
                          Used Git throughout the process for version control.
                        </li>
                        <li>
                          Project deployed using Heroku on
                          https://brew-buddyapp.herokuapp.com/
                        </li>
                      </ul>
                    </Card.Text>
                    <Button className="button">View App</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="./images/foodchat.png" />
                  <Card.Body>
                    <Card.Title>Food Chat</Card.Title>
                    <p>
                      <li>Created wireframes for the project. </li>
                      <li>
                        Collaborated with a team and used pair programming for
                        this app.
                      </li>
                      <li>
                        HTML5/CSS3/Express/Mongoose/Javascript/React/Bootstrap/created
                        an API
                      </li>
                      <li>
                        Used Git throughout the process for version control, and
                        to test new features on a new branch before implementing
                        them into the master branch.
                      </li>
                      <li>Project deployed using Heroku.</li>
                    </p>
                    <Button className="button">View App</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="./images/ringoandfriends.png" />
                  <Card.Body>
                    <Card.Title>Ringo and Friends</Card.Title>
                    <p>
                      <li>Created wireframes for the project.</li>
                      <li>
                        Incorporated React app for the front end functionality
                        and a Django Rest framework for the backend.
                      </li>
                      <li>
                        Created a custom user and simple Jwt-authentication.
                      </li>
                      <li>s Project deployed using Heroku.</li>
                    </p>
                    <Button className="button">View App</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

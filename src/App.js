import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Navbar from "./Components/NavBar";
import './App.css';
import { BrowserRouter , Route, Switch} from "react-router-dom";



class App extends Component {
  render() {
    return (      
      <div>
          <Navbar />
          <BrowserRouter>
            <Switch>
             <Route exact path="/about">
               <About />
               </Route>
               <Route exact path="/resume">
               <Resume />
               </Route>
           </Switch>
      </BrowserRouter>
        </div> 
    );
  }
}



export default App;

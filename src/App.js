import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="containerMain image-back">
        <Header />
        <Navbar />
        <Wrapper>
          <div className="container">
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/HomeComponent";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route
              path="/menu"
              component={() => <Menu dishes={this.state.dishes} />}
            />

            <Route path="/home" component={() => <Home />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

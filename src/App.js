import React, { Component } from "react";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import { COMMENTS } from "./shared/comments";
import { LEADERS } from "./shared/leaders";
import { PROMOTIONS } from "./shared/promotions";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/HomeComponent";
import Contact from "./components/ContactComponent";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  HomePage = () => {
    return (
      <Home
        dish={this.state.dishes.filter(dish => dish.featured)[0]}
        promotion={this.state.promotions.filter(promo => promo.featured)[0]}
        leader={this.state.leaders.filter(leader => leader.featured)[0]}
      />
    );
  };

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

            <Route path="/home" component={this.HomePage} />
            <Route path="/contactus" component={() => <Contact />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

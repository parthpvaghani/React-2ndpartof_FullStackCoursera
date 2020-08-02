import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            // selectedDish: null
        }
    }


    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // };


    render() {

        const HomePage = () => {
            return (
                <Home
                />
            );
        }
        return (

            <div>
                <Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelect(dishId) }} />
                <div className="container">
                    <DishDetail dish={this.state.dishes.filter((dish) => {
                        return dish.id === this.state.selectedDish;
                    })[0]} />
                </div> */}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    {/* onclick is not passed in menu component we have different way to implement it we will see in later exce. */}
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />


            </div>

        );
    }

}

export default Main;

import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent'



class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }


    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    };


    render() {
        return (

            <div>
               
                <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelect(dishId) }} />
                <div className="container">
                    <DishDetail dish={this.state.dishes.filter((dish) => {
                        return dish.id === this.state.selectedDish;
                    })[0]} />
                </div>

            </div>

        );
    }

}

export default Main;

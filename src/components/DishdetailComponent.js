import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <React.Fragment>
                     <div className="col-12 col-md-5 m-1">
                     <Card >
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                     </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </React.Fragment>

            )
        }
        else
            return (
                <div></div>
            );
    }
    renderComments(commentsperdish) {
        if (commentsperdish != null) {
            const comment = commentsperdish.map((comment) => {
                return (
                    <React.Fragment>
                        <li>{comment.comment}</li><br />
                        <li>-- {comment.author}, {this.formatDate(comment.date)}</li><br />
                    </React.Fragment>
                )

            }
            );
            return (
                <ul className="list-unstyled">
                    {comment}
                </ul>
            )
        }
        else {
            return (<div></div>)
        }
    }


    render() {
        const dish = this.props.dish;


        return (
            <div className="row">
               
                    {this.renderDish(dish)}
                
            </div>

        );
    }
    formatDate(date) {
        const option = { year: 'numeric', month: 'short', day: 'numeric' };
        const date1 = new Date(date)
        const newdate = date1.toLocaleDateString("en-US", option)
        return newdate;

    }
}

export default DishDetail;
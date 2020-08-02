import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
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
                    <RenderComments commentsperdish={dish.comments} />
                </div>
            </React.Fragment>
        )
    }
    else
        return (
            <div></div>
        );

}

function RenderComments({commentsperdish}) {

    if (commentsperdish != null) {
        const comment = commentsperdish.map((comment) => {
            return (

                <React.Fragment>
                    <li>{comment.comment}</li><br />
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br />
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

const DishDetail = (props) => {
    const dish = props.dish;
    return (
        <div className="row">
            <RenderDish dish={dish} />
        </div>
    );
}




export default DishDetail;
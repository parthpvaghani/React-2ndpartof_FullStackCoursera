import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Label, Col, Button, FormGroup, Modal, ModalHeader,ModalBody } from 'reactstrap';



class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

     
    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.rating, values.yourname, values.comment);
    }

    render() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        return (
            <React.Fragment>
            <Button outline color="secondary" onClick={this.toggleModal}><span className="fa fa-comment fa-lg" ></span>Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
               <LocalForm onSubmit={(values)=>{this.handleSubmit(values)}}>
                        <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Ratings</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"  id="rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={12}>Your name</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Enter Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less '
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                       Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
            </ModalBody>
        </Modal>
        </React.Fragment>
        );
    }
}

export default CommentForm;
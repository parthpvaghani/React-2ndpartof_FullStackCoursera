import React from 'react';
import { baseUrl } from '../shared/baseUrl';


function RenderLeader(props) {
    return (
        <div className="container">

        <div className="row py-3">
            <div className="col-12 col-sm-2 order-sm-first">
            <img src={baseUrl +  props.leader.image} alt="alberto" className=" img-thumbnail d-flex align-self-center" />
            </div>

            <div className="col col-sm">
                <div className="media">
                    <div className="media-body">
                        <h4 className="mb-3">{props.leader.name}</h4>
                        <h6 className="mb-3">{props.leader.designation}</h6>
                        <p>{props.leader.description}</p>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}


export default RenderLeader;
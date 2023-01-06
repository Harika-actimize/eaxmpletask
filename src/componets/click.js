import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
// import ProductDescription from './description';
// import CardGroup from 'react-bootstrap/CardGroup';

export default class ProductDetails extends Component {
    constructor(props) {
        super();
        console.log(props.location.state.product.gallery)
        this.state = {
            products: [],
            product:props.location.state.product.gallery,
        };
    }
    render() {
        // let product = this.state.product.gallery
        
        return (
                <div className='row'>
                {this.state.product.map((u,ind) =>{
                    console.log("???????????",this.state.product,u);
                    return(
                 <div className='col-md-3 col-sm-1' key={ind}>
                <Card border="info">
                    <Card.Img variant="top" src={u.imagelink} />
                    <Card.Body>
                    <Card.Text style={{color:"green"}}>{u.price}</Card.Text>
                    <div className="product-actions">
                    <Link to={{ pathname: `/productdescription/${u.imagename}/${u.id}`,state:{product:u}}} className="nav-link" role="button">Viwe Details</Link>
                    </div>
                    </Card.Body>
                </Card>  
                </div>)
    }) }
            </div>

                        
        
        )

       
    }
}
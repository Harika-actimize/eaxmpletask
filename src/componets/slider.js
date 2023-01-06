import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
// import CardGroup from 'react-bootstrap/CardGroup';
import axios from "axios"; 

export default class ProductSlider extends Component {
    constructor() {
        super();
        this.state = {
            products: [],

        };
    }
    getUsersData() {
        axios
            .get("http://localhost:3000/products")
            .then(res => {
                const data = res.data
                this.setState({products:data})
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }

    render() {
        return (
            <div>
                <div  className="row">
                {this.state.products.map((u,ind)=>{
                    console.log(".................",u)
                    return(
                        <div className="col-md-3 col-sm-1" key={ind}>
                        <Card border="info">
                        <Card.Img variant="top" src={u.imagelink} />
                        <Card.Body>
                        <Card.Title style={{color:"hotpink"}}>{u.imagename}</Card.Title>
                        <Card.Text style={{color:"green"}}>{u.price}</Card.Text>
                        <Card.Text style={{color:"green"}}>{u.actulprice}</Card.Text>
                        {/* <Card.Text  style={{color:"blue"}}>{u.description}</Card.Text> */}
                        <div className="product-actions">
                            {/* <Button variant="primary" style={{marginRight:9}}>Buy Now</Button> */}
                            <Link to={{ pathname: `/productdetails/${u.imagename}/${u.id}`,state:{product:u}}} className="nav-link" role="button">Viwe Details</Link>
                        </div>
                        </Card.Body>
                        </Card>  
                         </div>   
                    )
                })}
                </div>
            </div>
        )
    }
}
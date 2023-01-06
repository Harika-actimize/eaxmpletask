import React, {Component} from 'react'
import {Card,Button} from 'react-bootstrap';
import ProductDetails from "./click"
// import CardGroup from 'react-bootstrap/CardGroup';

import axios from "axios"; 

export default class ProductSlider extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            viewDetails:false,
            currentItem:null
        };
    }
    getUsersData() {
        axios
            .get("http://localhost:3000/products")
            .then(res => {
                const data = res.data
                console.log(data)
                const products = data.map(u =>
                    <div>
                     <Card border="info">
                    <Card.Img variant="top" src={u.imagelink} />
                    <Card.Body>
                    <Card.Title style={{color:"hotpink"}}>{u.imagename}</Card.Title>
                    <Card.Text style={{color:"green"}}>{u.price}</Card.Text>
                    <Card.Text style={{color:"green"}}>{u.actulprice}</Card.Text>
                    {/* <Card.Text  style={{color:"blue"}}>{u.description}</Card.Text> */}
                    <div className="product-actions">
                        {/* <Button variant="primary" style={{marginRight:9}}>Buy Now</Button> */}
                        <Button variant="primary" onClick={()=>{
                            this.setState({currentItem:u,viewDetails:true})
                        }}>Viwe Details</Button>
                    </div>
                    </Card.Body>
                    </Card>  
                    {/* <CardGroup>
                        <Card border="info">
                            <Card.Img variant="top" src={u.imagelink} />
                            <Card.Body>
                            <Card.Title>{u.imagename}</Card.Title>
                            <Card.Text>{u.price}</Card.Text>
                            <Card.Text>{u.actulprice}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup> */}
                    </div>
                    )

                    this.setState({
                        products
                    })

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
                {viewDetails?<ProductDetails product={currentItem}/>:
                this.state.products}
            </div>
        )
    }
}
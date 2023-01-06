import React, {Component} from 'react'
import ReactImageMagnify from 'react-image-magnify';
// import CardGroup from 'react-bootstrap/CardGroup';
// const img = "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png"
export default class ProductDescription extends Component {
    constructor(props) {
        super();
        console.log(props.location.Object.pathname)
        this.state = {
            products: [],
            product:props.location.Object.pathname
        }
    }
    render() {

        const product = this.state.product
        console.log("harika",product);
        return (
            <div className='row' style={{marginTop:20, marginLeft:20}}>
                <div className='col-md-3 col-sm-1'>
                <React.Fragment>
                <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product.imagelink,
                        },
                        largeImage: {
                            src: product.imagelink,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                          width: '200%',
                          height: '150%'
                      },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false
                    }} />
        
      </React.Fragment>
                </div>
                <div className='col-md-1 col-sm-1'></div>
                <div className='description col-md-6 col-sm-1'>{product.description}
                <div>{product.price}</div>
                </div>
                </div>
    
        )
    }
}

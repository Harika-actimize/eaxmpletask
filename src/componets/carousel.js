import Carousel from 'react-bootstrap/Carousel'

function Scroll() {
    return (
      <>
        <Carousel style={{marginTop:1}}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Sabeer/BAU_NOV/Hisense_FIFA/D61695160_IN_HE_TV_BAU_Creatives_NOV_Hisense_Store_header_1242x1258_01-new_3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/COOP_20/Usha/UshaSew_1242x450_V2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default Scroll;
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="phone.jpg" />
        <Card.Body>
          <Card.Title>iPhone</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.notebook-driver.com/wp-content/uploads/2016/04/Gateway-NE571-Laptop-280x280.jpg" />
        <Card.Body>
          <Card.Title>Laptop</Card.Title>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn1.smartprix.com/rx-icCU4co6j-w280-h280/lg-gl-c322kpzy-308-l.jpg" />
        <Card.Body>
          <Card.Title>Frige</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cairocart.com/pub/media/catalog/product/cache/411fa0294fb36382a437c2a526801bc8/0/0/00-rpm-inox-waw325x0eg.jpg" />
        <Card.Body>
          <Card.Title>Washing Machine</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn1.smartprix.com/rx-i0WOWCgdk-w280-h280/vidiem-mg-581a-visio.jpg" />
        <Card.Body>
          <Card.Title>Mixer</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="ac.jpeg" />
        <Card.Body>
          <Card.Title>Ac</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text> */}
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
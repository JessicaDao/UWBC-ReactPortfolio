import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactCard from '../components/ContactCard';



function Contact() {
  return (
    <div>


      <Container style={{ marginTop: 30 }}>

        <Row>
          <Col size="md-12">
          <div>
            <ContactCard />

        </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Contact;

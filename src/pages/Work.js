import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import WorkCard from "../components/WorkCard";

function Work() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
      <div className="row" id="row-top">
              <div className="col-md-12">
                  <h1>PREVIOUS PROJECTS</h1>
              </div>
          </div>
        <Row>
          <WorkCard/>
        </Row>
      </Container>
    </div>
  );
}


export default Work;

import Footer from "../Components/LayOut/Footer";
import Header from "../Components/LayOut/Header";
import { Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <Card className="bg-dark text-white">
          <Card.Img src="https://via.placeholder.com/100" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <br />
        <Card className="bg-dark text-white">
          <Card.Img src="https://via.placeholder.com/100" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

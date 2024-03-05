import { Container } from "react-bootstrap";
import TrafficLight from "../components/TrafficLight"; // Import TrafficLight component

export default function Home() {
  return (
    <Container>
      <TrafficLight /> {/* Render TrafficLight component */}
    </Container>
  );
}

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Shop at Home</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

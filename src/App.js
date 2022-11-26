import "./App.css";
import CCMyKitchen from "./Class Comps/CCMyKitchen";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="header"><h1>Welcome to the best restaurant in the world</h1></div>
          <CCMyKitchen />

    </>
  );
}

export default App;

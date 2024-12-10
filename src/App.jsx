import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router";

import {
  BsThreeDotsVertical,
  BsMoonStarsFill,
  BsMoonStars,
} from "react-icons/bs";
import AboutMe from "./components/AboutMe";

//Dark Mode Without any outside components

/*
1.) Set up the useState hook
2.) Set up a handler function to trigger the hook
3.) Create a button and have it call the handler function when you click it
4.) Use the state variable in the style prop of whatever component you wish to update
*/

function App() {
  //hooks = code waiting to rerender site

  //isDark = is either going to be true or false (AKA Boolean)
  //setIsDark = is going to be the function that updates the value to true or false
  const [isDark, setIsDark] = useState(false);

  const [show, setShow] = useState(false);

  function handleToggle() {
    /*
      First Check if dark mode is on,
      if dark mode is on, then set it to off
      else, set dark mode on
    */
    if (isDark == true) setIsDark(false);
    else setIsDark(true);
  }

  const handleShow = () => {
    if (show == true) setShow(false);
    else setShow(true);
  };

  return (
    //div = dividor
    <Container
      fluid
      className="quicksand"
      style={{
        height: "100vh",
        backgroundColor: isDark && "black",
        color: isDark && "white",
        transition: "0.3s",
        overflow: "scroll",
      }}
    >
      <Row>
        <Col xs={2} className="d-flex justify-content-start align-items-center">
          {" "}
          {isDark ? (
            <BsMoonStarsFill className="bttn" onClick={handleToggle} />
          ) : (
            <BsMoonStars className="bttn" onClick={handleToggle} />
          )}
        </Col>
        <Col className="d-flex justify-content-center">
          {" "}
          <h1>Example Site</h1>{" "}
        </Col>
        <Col xs={2} className="d-flex justify-content-end align-items-center">
          <BsThreeDotsVertical className="bttn" onClick={handleShow} />
        </Col>
      </Row>

      <AboutMe />

      {/* <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={hex_background}></Card.Img>
            <Card.Body>
              <Card.Title>Some Card</Card.Title>
              <Card.Text>wpirughwurbgiwerugneirugbwregub</Card.Text>
              <Button>Click ME</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      <Offcanvas
        className="quicksand"
        show={show}
        onHide={handleShow}
        placement="end"
        style={{
          backgroundColor: isDark && "grey",
          color: isDark && "white",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Menu</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row className="fs-5 py-1 menu-bttn">Home</Row>

            <Row className="fs-5 py-1 menu-bttn">
              <Link to={"gallery"}> Gallery</Link>
            </Row>

            <Row className="fs-5 py-1 menu-bttn">About</Row>

            <Row className="fs-5 py-1 menu-bttn">Settings</Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default App;

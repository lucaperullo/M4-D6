import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import items from "../data/menu.json";
import DishComments from "./DishComments";
import ReservationForm from "./ReservationForm";
import Reservations from "./Reservations";
import FakeAlert from "./FakeAlert";

// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

class Home extends React.Component {
  state = {
    selectedDish: items[0],
  };

  // constructor(props) {
  //     super(props)
  //     console.log('constructor invoked!')
  //     this.state = {
  //         selectedDish: null
  //     }
  // }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            {this.state.selectedDish ? (
              <h1>{this.props.newTitle}</h1>
            ) : (
              <h1>Welcome to Strivestaurant</h1>
            )}
            {this.state.selectedDish ? (
              <p>{this.props.NewPayoff}</p>
            ) : (
              <p>The best dishes you can find on the web!</p>
            )}
          </Col>
          <Splide
            options={{
              autoplay: true,
              type: "loop",
              rewind: true,
              direction: "ttb",
              height: "40rem",
              autoWidth: true,
            }}
          >
            {items.map((item) => (
              <SplideSlide key={item.id}>
                <Row className="foodRow">
                  <Col xs={12} md={6}>
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt={item.name}
                      onClick={() =>
                        this.setState({
                          selectedDish: item,
                        })
                      }
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="text-muted">{item.label}</p>
                  </Col>
                </Row>
              </SplideSlide>
            ))}
          </Splide>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={8} md={4}>
            <DishComments selectedDish={this.state.selectedDish} />
          </Col>
          <Col xs={8} md={4}>
            <Reservations h3="This is Reservation" />
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={8}>
            {console.log(this.state.selectedDish)}
            {this.state.selectedDish.comments[0].rating === 5 ? (
              <FakeAlert />
            ) : (
              <ReservationForm />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

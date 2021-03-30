import React from "react";
import { ListGroup } from "react-bootstrap";
import Rater from "react-rater";
import Moment from "react-moment";
import "react-rater/lib/react-rater.css";
class DishComments extends React.Component {
  render() {
    if (this.props.selectedDish) {
      return (
        <ListGroup>
          <h2>Comments for {this.props.selectedDish.name}</h2>
          {this.props.selectedDish.comments.map((c) => (
            <ListGroup.Item key={c.id}>
              <strong>{c.author} : </strong>
              {c.comment}
              <br />
              <strong>Rate : </strong>{" "}
              <Rater rating={c.rating} interactive={false} /> <br />
              <p className="text-muted">
                {" "}
                <Moment fromNow>{c.date}</Moment>
              </p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      );
    } else {
      return <h1>NOTHING YET</h1>;
    }
  }
}

export default DishComments;

// mapping props.selectedDish.comments

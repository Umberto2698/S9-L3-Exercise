import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  selectCard = (e) => {
    e.preventDefault();
    this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
  };

  render() {
    return (
      <div className="object-contain mx-auto">
        {this.state.selected ? (
          <Card onClick={this.selectCard} className="border-success">
            <Card.Img variant="top" src={this.props.book.img} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            </Card.Body>
          </Card>
        ) : (
          <Card onClick={this.selectCard}>
            <Card.Img variant="top" src={this.props.book.img} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default SingleBook;

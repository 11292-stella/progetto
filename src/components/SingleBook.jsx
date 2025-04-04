import { Component } from "react"
import { Col, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"
class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    const { libro } = this.props
    return (
      <Col xs={12} sm={6} md={4} lg={2} key={libro.asin} className="mb-3">
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={libro.img} />
          <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>Prezzo: {libro.price}€</Card.Text>
            <Card.Text>Categoria: {libro.category}</Card.Text>
            <Button variant="success">Buy</Button>
            {this.state.selected && <CommentArea libro={libro} />}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook

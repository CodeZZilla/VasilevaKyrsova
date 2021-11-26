import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {inject} from "mobx-react";


@inject('store')
class News extends React.Component {
    render() {
        const { getAllNews } = this.props.store;

        return(
            <Container className="align-items-center">
                <h1>Новини</h1>
                <Row xs={1} md={2} className="g-4">
                    {getAllNews.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }

}

export default News;
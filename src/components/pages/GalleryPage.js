import React from "react";
import {Col, Container, Figure, Row} from 'react-bootstrap';
import {inject} from 'mobx-react';

@inject('store')
class GalleryPage extends React.Component {
    render() {
        const {getAllImages} = this.props.store;

        return (
            <Container>
                <h1>Галерея</h1>
                <Row className="images-container justify-content-center">
                    {getAllImages.map(item => (
                        <Col className="col-5">
                            <Figure key={item.id}>
                                <Figure.Image
                                    src={item.imageUrl}
                                />
                                <Figure.Caption>
                                    {item.description}
                                </Figure.Caption>
                            </Figure>
                        </Col>

                    ))}
                </Row>
            </Container>
        )
    }

}

export default GalleryPage;
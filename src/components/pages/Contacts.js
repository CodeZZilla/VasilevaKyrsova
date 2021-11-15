import React from "react";
import {Container, Accordion} from "react-bootstrap";

function Contacts (){
    return(
        <Container>
            <h1>Контакти</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Номер телефону</Accordion.Header>
                    <Accordion.Body>
                        +380974303838
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Веб-сайт</Accordion.Header>
                    <Accordion.Body>
                        <a href="google.com">google.com</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p></p>
        </Container>
    )
}
export default Contacts;
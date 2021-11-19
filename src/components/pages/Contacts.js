import React from "react";
import {Container, Accordion} from "react-bootstrap";

function Contacts (){
    return(
        <Container>
            <h1>Контакти</h1>
            <Accordion>
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
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Ми на карті</Accordion.Header>
                    <Accordion.Body>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.552919934165!2d30.53881331164895!3d50.4292116344382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0c1e037bfd%3A0x8907f87c86d17eec!2sViti%20Iszi!5e0!3m2!1sru!2sua!4v1637312195405!5m2!1sru!2sua"
                            className="iframe"
                            allowFullScreen=""
                            loading="lazy"
                        >

                        </iframe>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p></p>
        </Container>
    )
}
export default Contacts;
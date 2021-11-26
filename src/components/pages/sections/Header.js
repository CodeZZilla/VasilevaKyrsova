import React from "react";
import {Container, Image} from "react-bootstrap"

function Header(){

    return (
        <div className="header">
            <div className="header-inner">
                <div className="d-flex align-items-center logo">
                    <Image src="images/ВІТІ_2019.png" alt="VITI"/>
                    <Container >
                        <h1>Військовий інститут телекомунікацій та інформатизації імені Героїв Крут</h1>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Header;
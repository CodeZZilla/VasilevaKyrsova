import React from "react";
import {Container} from "react-bootstrap"

function Header(){
    return (
        <div className="header">
            <div className="header-inner">
                <div className="logo">
                    <Container>
                        <h1>Найбільші військові виставки України</h1>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Header;
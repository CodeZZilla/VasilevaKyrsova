import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container} from 'react-bootstrap';
import {inject} from 'mobx-react';
import styled from 'styled-components';
import "../../../img/aviasvit1.jpg";

const Item = styled.div`
background-image: url('${props => props.imageUrl}') !important;
  height: 190px;
  //width: 180px;
`;

@inject('store')
class Slider extends React.Component {
    render() {
        const { getAllImages } = this.props.store;

        return(
            <Container>
                <OwlCarousel className='owl-theme' loop margin={3} >
                    {getAllImages.map(item=>(
                        // <Item key={item.id} className='item' imageUrl={item.imageUrl}>
                        //     {console.log(item.imageUrl)}
                        //     <h4>1</h4>
                        // </Item>
                        <div>
                            <img src={item.imageUrl}/>
                        </div>
                    ))}
                </OwlCarousel>
            </Container>
        )
    }
}

export default Slider;
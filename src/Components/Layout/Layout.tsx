import React, { ReactElement } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import SidebarWrapper from './Sidebar';
import { Container, Col, Row } from 'reactstrap';
import { PokemonController } from '../../api/pokeapi/interfaceAdapters/controllers/PokemonController';

type LayoutProps = {
    children: ReactElement;
}

export const Layout = (props: LayoutProps) => {
    return (
        <Container>
            <SidebarWrapper/>
            <Row>
                <Col>
                    <Header />
                    <div className='layout-content'>
                    {props.children}
                    </div>
                    <Footer />
                </Col> 
            </Row>
        </Container>
    );
}
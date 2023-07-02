import React from "react";
import { connect } from "react-redux";
import './PokemonDetail.css';
import { Col, Container, Row, Spinner } from "reactstrap";
import { Pokemon } from "../../api/aggregates/pokemon/shared/types/Pokemon";

type PokemonDetailProps = {
    pokemon?: Pokemon;
    isLoadingPokemonDetail?: boolean;
};
const PokemonDetail = (props: PokemonDetailProps) => {
    if (props.isLoadingPokemonDetail)
        return <div className="pokemon-detail">
            <Spinner color="primary" />
        </div>;

    if (!props.pokemon){
        return <div className="pokemon-detail">
            <p>No detail loaded yet.</p>
        </div>;
    }

    return <div className="pokemon-detail">
        <Container fluid>
            <Row>
                <Col className="text-left">No. {props.pokemon.id}</Col>
                <Col className="text-right"><h3><strong>{props.pokemon.name}</strong></h3></Col>
            </Row>
            <Row>
                <Col>
                    <h5><strong>Types</strong></h5>        
                    { props.pokemon.types?.join(" / ") || "N/A" }
                </Col>
                <Col>
                    <h5><strong>Size</strong></h5>        
                    <Col>
                        <Row>
                            <Col className="text-right"><span>Weight:</span></Col><Col className="text-left">{props.pokemon.weight} g</Col>
                            <Col className="text-right"><span>Height:</span></Col><Col className="text-left">{props.pokemon.height} cm</Col>
                        </Row>
                    </Col>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <img src={props.pokemon.thumbnail} alt="thumbnail"/>
                </Col>
            </Row>
        </Container>
        
        
        
        
    </div>;
};

const mapStateToProps = (state: any) => {
    return {
        pokemon: state.Pokemon.pokemonDetail,
        isLoadingPokemonDetail: state.Pokemon.isLoadingPokemonDetail
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
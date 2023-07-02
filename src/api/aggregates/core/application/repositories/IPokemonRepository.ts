import { GetPokemonByIdInputDTO } from "../../../pokemon/shared/dto/GetPokemonByIdInputDTO";
import { GetPokemonByIdOutputDTO } from "../../../pokemon/shared/dto/GetPokemonByIdOutputDTO";
import { GetPokemonListInputDTO } from "../../../pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonListOutputDTO } from "../../../pokemon/shared/dto/GetPokemonListOutputDTO";


export interface IPokemonRepository {
	getPokemonById(args: GetPokemonByIdInputDTO): Promise<GetPokemonByIdOutputDTO>;
	getPokemonList(args: GetPokemonListInputDTO): Promise<GetPokemonListOutputDTO>;
}

import { GetPokemonListInputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonListOutputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonListOutputDTO";

export const getPokemonList = async (
	getPokemonList: Function,
	args: GetPokemonListInputDTO,
): Promise<GetPokemonListOutputDTO> => {
	return await getPokemonList(args);
}
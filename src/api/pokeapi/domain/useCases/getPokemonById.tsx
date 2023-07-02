import { GetPokemonByIdInputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";
import { GetPokemonByIdOutputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonByIdOutputDTO";

export const getPokemonById = async (
	getPokemonById: Function,
	args: GetPokemonByIdInputDTO,
): Promise<GetPokemonByIdOutputDTO> => {
	return await getPokemonById(args);
}
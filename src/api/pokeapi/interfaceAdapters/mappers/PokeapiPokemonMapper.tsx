
import { IPokemonRepository } from "../../../aggregates/core/application/repositories/IPokemonRepository";
import { GetPokemonByIdInputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";
import { GetPokemonByIdOutputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonByIdOutputDTO";
import { GetPokemonListInputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonListOutputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonListOutputDTO";
import { HttpPokeapiService } from "../../infrastructure/HttpPokeapiService";
import { GetPokeapiPokemonListInputDTO } from "../../shared/dto/GetPokeapiPokemonListInputDTO";
import { getListLimit } from "../../shared/utils/utils";

export class PokeapiPokemonMapper implements IPokemonRepository {
	pokemonService: HttpPokeapiService;
	constructor(pokemonService: HttpPokeapiService) {
		this.pokemonService = pokemonService;
	}
	async getPokemonList(args: GetPokemonListInputDTO): Promise<GetPokemonListOutputDTO> {
		if (args.data.generation < 0)
			throw new Error("Generation must be greater than 0");
		else if (args.data.generation > 8)
			throw new Error("Generation must be less than 8");		

		const input : GetPokeapiPokemonListInputDTO = {
			data: {
				limit: getListLimit(args.data.generation) ,
				offset: 0
			}
		}
		const response = await this.pokemonService.getPokemonList(input);
		return response.results.map((pokemon) => {
			return {
				id: parseInt(pokemon.url.split("/")[6]),
				name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
			}
		});
	}
	async getPokemonById(args: GetPokemonByIdInputDTO): Promise<GetPokemonByIdOutputDTO> {
		const response = await this.pokemonService.getPokemonById(args);
		return {
			id: response.id,
			name: response.name.charAt(0).toUpperCase() + response.name.slice(1),
			types: response.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)),
			thumbnail: response.sprites.other["official-artwork"].front_default,
			movements: response.moves.map((move) => move.move.name),
			abilities: response.abilities.map((ability) => ability.ability.name),
			height: response.height,
			weight: response.weight,
		}
	}

	
}

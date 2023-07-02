
import { HttpService } from "../../aggregates/core/infrastructure/HttpService";
import { IPokemonGateway } from "../../aggregates/pokemon/interfaceAdapters/IPokemonGateway";
import { GetPokeapiPokemonByIdInputDTO } from "../shared/dto/GetPokeapiPokemonByIdInputDTO";
import { GetPokeapiPokemonByIdOutputDTO } from "../shared/dto/GetPokeapiPokemonByIdOutputDTO";
import { GetPokeapiPokemonListInputDTO } from "../shared/dto/GetPokeapiPokemonListInputDTO";
import { GetPokeapiPokemonListOutputDTO } from "../shared/dto/GetPokeapiPokemonListOutputDTO";

const BASE_URL = "https://pokeapi.co/api/v2";

export class HttpPokeapiService extends HttpService implements IPokemonGateway {

	constructor() {
		super({
			name: "PokeApi Service",
			serviceOwner: "Sergio Balaguer Carmona",
			type: "Http",
		});
	}
	async getPokemonList(args: GetPokeapiPokemonListInputDTO): Promise<GetPokeapiPokemonListOutputDTO> {
		return await this.get({
			url: `${BASE_URL}/pokemon/?offset=${args.data.offset}&limit=${args.data.limit}`,
		});
	}
	async getPokemonById(args: GetPokeapiPokemonByIdInputDTO): Promise<GetPokeapiPokemonByIdOutputDTO> {
		return await this.get({
			url: `${BASE_URL}/pokemon/${args.data.id}`,
		});
	}

}

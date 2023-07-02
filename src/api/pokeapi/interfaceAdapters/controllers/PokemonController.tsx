

import { IPokemonRepository } from "../../../aggregates/core/application/repositories/IPokemonRepository";
import { RepositoryCollection } from "../../../aggregates/core/installer/GenericInstaller";
import { GenericController } from "../../../aggregates/core/interfaceAdapters/GenericController";
import { GetPokemonByIdInputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";
import { GetPokemonByIdOutputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonByIdOutputDTO";
import { GetPokemonListInputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonListOutputDTO } from "../../../aggregates/pokemon/shared/dto/GetPokemonListOutputDTO";
import { getPokemonById } from "../../domain/useCases/getPokemonById";
import { getPokemonList } from "../../domain/useCases/getPokemonList";
export class PokemonController extends GenericController<RepositoryCollection> implements IPokemonRepository {
	private _repositories: RepositoryCollection;
	constructor(repositories: RepositoryCollection) {
		super(repositories);
		this._repositories = repositories;
	}
	getPokemonList(args: GetPokemonListInputDTO): Promise<GetPokemonListOutputDTO> {
		return getPokemonList(this._pokemonRepository.getPokemonList, args);
	}
	getPokemonById(args: GetPokemonByIdInputDTO): Promise<GetPokemonByIdOutputDTO> {
		return getPokemonById(this._pokemonRepository.getPokemonById, args);
	}
}

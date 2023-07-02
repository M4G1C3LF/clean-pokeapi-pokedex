import { ILogRepository } from "./ILogRepository";
import { IPokemonRepository } from "./IPokemonRepository";

export interface ApplicationRepositories {
	_logger: ILogRepository,
	_pokemonRepository: IPokemonRepository,
}
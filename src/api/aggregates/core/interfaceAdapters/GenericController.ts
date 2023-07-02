import { ILogRepository } from '../application/repositories/ILogRepository';
import { ApplicationRepositories } from '../application/repositories/ApplicationRepositories';

export class GenericController<T extends ApplicationRepositories> {


	_logger: ILogRepository;
	_pokemonRepository: T["_pokemonRepository"];

	constructor(repositories: T) {

		this._logger = repositories._logger;
		this._pokemonRepository = repositories._pokemonRepository;
	}

	public writeLog(str: string): void {
		this._logger.write(str);
	}

}

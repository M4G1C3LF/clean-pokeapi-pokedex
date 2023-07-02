import { HttpPokeapiService } from "../../../pokeapi/infrastructure/HttpPokeapiService";
import { ILogRepository } from "../application/repositories/ILogRepository";
import { IPokemonRepository } from "../application/repositories/IPokemonRepository";
import ConsoleLogService from "../infrastructure/ConsoleLogService";
import { drawLine } from "../shared/utils/StringUtils";

export class GenericInstaller {

	logger: ILogRepository;

	_serviceName: string;
	_logPath: string;

	constructor(
		serviceName: string,
		logPath: string,
	) {
		this._serviceName = serviceName;
		this._logPath = logPath;
		this.logger = new ConsoleLogService();
		
		this.printInitialMessage(this._serviceName);
	}

	printInitialMessage(serviceName: string) {
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 2, '=') +
			serviceName +
			drawLine(serviceName.length * 2, '='),
		);
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
	}

	initializeRepositories<
		T extends Partial<RepositoryCollection>,
		UseCaseCollections = {
			_logger: ILogRepository,
			_pokemonService: IPokemonRepository,
			
		}
	>(args: T) {

		const logRepository = args._logger || new ConsoleLogService();
		const pokemonRepository = args._pokemonRepository || new HttpPokeapiService();
		const useCaseCollections = {
			_logger: logRepository,
			_pokemonService: pokemonRepository,
		}

		return useCaseCollections as UseCaseCollections;
	}
}

export interface RepositoryCollection {
	_logger: ILogRepository,
	_pokemonRepository: IPokemonRepository,
}
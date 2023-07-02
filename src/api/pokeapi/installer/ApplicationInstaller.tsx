import { GenericInstaller } from '../../aggregates/core/installer/GenericInstaller';
import { HttpPokeapiService } from '../infrastructure/HttpPokeapiService';
import { PokemonController } from '../interfaceAdapters/controllers/PokemonController';
import { PokeapiPokemonMapper } from '../interfaceAdapters/mappers/PokeapiPokemonMapper';

const SERVICE_NAME = 'PokéApi';
const LOG_PATH = './logs/api.logs';

export default class ApplicationInstaller extends GenericInstaller {

	_controller: PokemonController;

	constructor() {
		super(SERVICE_NAME, LOG_PATH);
		this._controller = this.initializeController();
	}

	initializeController() {
		const logRepository = this.logger;
		const pokemonService = new HttpPokeapiService();
		const pokemonRepository = new PokeapiPokemonMapper(pokemonService);

		return new PokemonController({
			_logger: logRepository,
			_pokemonRepository: pokemonRepository,
		});
	}

	getController(): PokemonController {
		return this._controller;
	}
}

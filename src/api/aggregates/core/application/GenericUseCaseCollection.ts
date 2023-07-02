import { GenericError } from "../domain/valueObjects/errors/GenericError";
import { ILogRepository } from "./repositories/ILogRepository";

export class GenericUseCaseCollection {

	protected _logRepository: ILogRepository;
	
	constructor(logRepository: ILogRepository) {
		this._logRepository = logRepository;
	}

	protected onCatch(usecase: string, error: any): any {
		console.trace(usecase);
		if (error.code == null || error.message == null) {
			error = new GenericError({
				code: 500,
				message: `unknown error at ${usecase}`,
				error: error,
			});
		}
		this._logRepository.write(`ERROR::${error.code}::::${error.message}`);
		throw error;
	}
}
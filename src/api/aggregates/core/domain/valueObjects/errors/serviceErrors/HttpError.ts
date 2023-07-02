import { GenericError } from "../GenericError";

export class HttpError extends GenericError {

	fetchUrl: string;

  constructor(args: { fetchUrl: string; error?: any; index?: number }) {
    super({
      code: args.error?.status || args.error?.code || 500,
      message: `Can't fetch data from '${args.fetchUrl}'`,
      error: args?.error,
      index: args?.index,
    });
		this.fetchUrl = args.fetchUrl;
  }

}
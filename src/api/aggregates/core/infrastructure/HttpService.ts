import { HttpError } from "../domain/valueObjects/errors/serviceErrors/HttpError";
import { isPrimitiveType } from "../shared/utils/GenericUtils";
import { Service } from "./Service";

type GetArgs = {
	url: string,
	token?: string | undefined,
	acceptAllHeaders?: boolean,
}

type PostArgs = {
	url: string,
	token: string | undefined,
	body: { [x:string]: any },
	acceptAllHeaders?: boolean,
}

type PutArgs = PostArgs;

export class HttpService extends Service {
  	/**
	 * "GET"
	 * @returns response.json()
	 */
	async get(args: GetArgs): Promise<any> {
		try {
			const response = await this.getResponse(args);
			return await response.json();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "GET"
	 * @returns response.text()
	 */
	async getText(args: GetArgs): Promise<string> {
		try {
			const response = await this.getResponse(args);
			return await response.text();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "GET"
	 * @returns response
	 */
	async getResponse(args: GetArgs): Promise<Response> {
		try {
			return await this.fetch({
				url: args.url,
				method: "GET",
				token: args.token,
				acceptAllHeaders: args.acceptAllHeaders,
			});
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "POST"
	 * @returns response.json()
	 */
	async post(args: PostArgs): Promise<any> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			const response = await this.postAndGetResponse(args);
			return await response.json();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "POST"
	 * @returns response.json()
	 */
	async postFormData(args: PostArgs): Promise<any> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			const response = await this.postAndGetResponse({
				...args,
				transformBodyToFormData: true,
			});
			return await response.json();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "POST"
	 * @returns response.text()
	 */
	async postAndGetText(args: PostArgs): Promise<string> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			const response = await this.postAndGetResponse(args);
			return await response.text();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "POST"
	 * @returns response
	 */
	async postAndGetResponse(args: PostArgs & { transformBodyToFormData?: boolean }): Promise<Response> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			return await this.fetch({
				url: args.url,
				method: "POST",
				token: args.token,
				body: args.transformBodyToFormData
					? HttpService.createFormData(args.body)
					: JSON.stringify(args.body),
				acceptAllHeaders: args.acceptAllHeaders,
			});
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "PUT"
	 * response.json()
	 */
	async put(args: PutArgs): Promise<any> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			const response = await this.putAndGetResponse(args);
			return await response.json();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "PUT"
	 * response.text()
	 */
	async putAndGetText(args: PutArgs): Promise<string> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			const response = await this.putAndGetResponse(args);
			return await response.text();
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	/**
	 * "PUT"
	 * response.text()
	 */
	async putAndGetResponse(args: PutArgs & { transformBodyToFormData?: boolean }): Promise<Response> {
		if (args.body?.data?.token != null) args.body.data.token = undefined;
		try {
			return await this.fetch({
				url: args.url,
				method: "PUT",
				token: args.token,
				body: args.transformBodyToFormData
					? HttpService.createFormData(args.body)
					: JSON.stringify(args.body),
				acceptAllHeaders: args.acceptAllHeaders,
			});
		} catch (error) {
			if (error instanceof HttpError) throw error;
			else throw new HttpError({ fetchUrl: args.url, error: error });
		}
	}

	private async fetch(args: {
		url: string,
		method: "POST" | "GET" | "PUT" | "DELETE",
		token: string | undefined,
		body?: string | FormData | undefined;
		acceptAllHeaders?: boolean,
	}): Promise<Response> {
		const init: any = {
			method: args.method,
			headers: {
				'Accept': args.acceptAllHeaders ? '*/*' : 'application/json',
			},
		};
		if (args.token != null) init.headers['Authorization'] = args.token;
		if (typeof args.body === 'string') init.headers['Content-Type'] = 'application/json';
		if (args.body != null) init.body = args.body;
		const response = await fetch(args.url, init);
		if (response.status !== 200) {
			let resParsed;
			try {
				resParsed = await response.json();
			} catch (error) {
				try {
					resParsed = await response.text();
				} catch (error) {
					resParsed = response;
				}
			}
			throw new HttpError({ fetchUrl: args.url, error: resParsed });
		} else {
			return response;
		}
	}

	public static createFormData = (body: any) => {
		const isFile = (value: any) => {
			return value.md5 != null && value.mimetype != null;
		};
    const formData = new FormData();
    const keys = Object.keys(body);
    for (const key of keys) {
      const value = body[key as keyof typeof body];
      if (value != null) {
				if (Array.isArray(value) && value.length > 0 && isFile(value[0])) {
					for (const file of value) {
						formData.append(key, new Blob(file.data), file.name);
					}
				}
        else if (isFile(value)) {
          formData.append(key, new Blob(value.data), value.name);
        } else if (!isPrimitiveType(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }
    }
    return formData;
  };

}

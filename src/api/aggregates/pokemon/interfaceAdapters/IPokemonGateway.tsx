export interface IPokemonGateway {
	getPokemonById(input: any): Promise<any>;
	getPokemonList(input: any): Promise<any>;
}

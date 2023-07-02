import { PokemonGeneration1Sprites } from "../types/Sprites/PokemonGeneration1Sprites";
import { PokemonGeneration2Sprites } from "../types/Sprites/PokemonGeneration2Sprites";
import { PokemonGeneration3Sprites } from "../types/Sprites/PokemonGeneration3Sprites";
import { PokemonGeneration4Sprites } from "../types/Sprites/PokemonGeneration4Sprites";
import { PokemonGeneration5Sprites } from "../types/Sprites/PokemonGeneration5Sprites";
import { PokemonGeneration6Sprites } from "../types/Sprites/PokemonGeneration6Sprites";
import { PokemonGeneration7Sprites } from "../types/Sprites/PokemonGeneration7Sprites";
import { PokemonGeneration8Sprites } from "../types/Sprites/PokemonGeneration8Sprites";
import { PokemonSprites } from "../types/Sprites/PokemonSprites";

export interface GetPokeapiPokemonByIdOutputDTO {
	abilities: {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}[];
	base_experience: number;
	forms: {
		name: string;
		url: string;
	}[];
	game_indices: {
		game_index: number;
		version: {
			name: string;
			url: string;
		};
	}[];
	height: number;
	held_items: {
		item: {
			name: string;
			url: string;
		};
		version_details: {
			rarity: number;
			version: {
				name: string;
				url: string;
			};
		}[];
	}[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: {
		move: {
			name: string;
			url: string;
		};
		version_group_details: {
			level_learned_at: number;
			move_learn_method: {
				name: string;
				url: string;
			};
			version_group: {
				name: string;
				url: string;
			};
		}[];
	}[];
	name: string;
	order: number;
	species: {
		name: string;
		url: string;
	};
	sprites: PokemonSprites & {
		other: {
			dream_world: {
				front_default: string;
				front_female: string;
			};
			'official-artwork': {
				front_default: string;
			};
		};
		versions: {
			'generation-i': PokemonGeneration1Sprites;
			'generation-ii': PokemonGeneration2Sprites
			'generation-iii': PokemonGeneration3Sprites;
			'generation-iv': PokemonGeneration4Sprites;
			'generation-v': PokemonGeneration5Sprites;
			'generation-vi': PokemonGeneration6Sprites;
			'generation-vii': PokemonGeneration7Sprites;
			'generation-viii': PokemonGeneration8Sprites;
		};
	};
	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
	weight: number;
}
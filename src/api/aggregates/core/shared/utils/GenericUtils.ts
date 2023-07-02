export const isPrimitiveType = (x: any): boolean => {
  return x === null || (typeof x !== "function" && typeof x !== "object");
};

// export function getConcretionFromGeneric<T>(input: any): T {
//   const data: T = JSON.parse(JSON.stringify(input));
//   return data;
// }

// type a = {
// 	num: number,
// 	text: string,
// }

// const aa: a = {
// 	num: 123,
// 	text: "hola",
// 	extra: "adios",
// } as any

// const aaa = getConcretionFromGeneric<a>(aa);

// aaa.

export const GetKeys = <T extends { [id: string]: any }>(
	obj: T
): Extract<keyof T, string>[] => {
	if (obj == null || obj === null) return [];
	return Object.keys(obj) as Extract<keyof T, string>[];
};
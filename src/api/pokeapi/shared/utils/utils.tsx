export const getListLimit = (generation : number) => {
    switch (generation) {
        case 1:
            return 151;
        case 2:
            return 251;
        case 3:
            return 386;
        case 4:
            return 493;
        case 5:
            return 649;
        case 6:
            return 721;
        case 7:
            return 809;
        case 8:
            return 898;
        default:
            throw new Error("Generation must be between 1 and 8");
    }
}
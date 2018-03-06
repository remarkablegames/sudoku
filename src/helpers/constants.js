export const SUDOKU_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const SUDOKU_LARGEST_DIGIT = Math.max.apply({}, SUDOKU_DIGITS);

// ga event value must be an integer
// so a difficulty of .5 will be tracked as 500
export const GA_DIFFICULTY_MULTIPLIER = 1e3;

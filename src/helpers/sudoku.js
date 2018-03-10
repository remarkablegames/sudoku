import { SUDOKU_DIGITS, SUDOKU_LARGEST_DIGIT } from './constants';

/**
 * Shuffles an array.
 *
 * @param  {Array}   array
 * @param  {Boolean} [shouldMutate=false]
 * @return {Array}
 */
const shuffleArray = (array = [], shouldMutate = false) => {
  const arr = shouldMutate ? array : array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

/**
 * Randomly generates a Sudoku row.
 *
 * @return {Array} - Shuffled numbers between 1 and 9 inclusive.
 */
const generateRow = () => shuffleArray(SUDOKU_DIGITS);

/**
 * Given output, checks if row is usable in Sudoku solution.
 *
 * @param  {Number}  index
 * @param  {Array}   row
 * @param  {Array}   output
 * @return {Boolean}
 */
const isRowUsable = (index, row = [], output = []) => {
  let rowIndex = output.length - 1;
  for (; rowIndex > -1; rowIndex--) {
    let columnIndex = output[rowIndex].length - 1;
    for (; columnIndex > -1; columnIndex--) {
      // check if row value exists in output column
      const rowValue = row[columnIndex];
      if (rowValue === output[rowIndex][columnIndex]) return false;

      let rowStart = 6;
      if (index < 3) {
        rowStart = 0;
      } else if (index < 6) {
        rowStart = 3;
      }

      let columnStart = 6;
      if (columnIndex < 3) {
        columnStart = 0;
      } else if (columnIndex < 6) {
        columnStart = 3;
      }

      let section = [];
      for (let i = 0; i < 3; i++) {
        if (output[rowStart + i] instanceof Array) {
          section = section.concat(
            output[rowStart + i].slice(columnStart, columnStart + 3)
          );
        }
      }

      // check if row value exists in output 3x3 section
      if (section.indexOf(rowValue) !== -1) return false;
    }
  }
  return true;
};

/**
 * Generates a Sudoku solution.
 *
 * @return {Array}
 */
const generateSolution = () => {
  // seed 1st row
  const output = [generateRow()];

  // generate rows 2 to 8
  let loopCount = 0;
  for (let index = 1; index < 8; index++) {
    while (true) {
      const row = generateRow();
      if (isRowUsable(index, row, output)) {
        output[index] = row;
        loopCount = 0;
        break;
      }
      loopCount++;
      // break and try again if stuck in infinite loop
      if (loopCount > 2e5) return generateSolution();
    }
  }

  // invert the output
  const columnValues = output.reduce((result, row, rowIndex) => {
    row.forEach((columnValue, columnIndex) => {
      result[columnIndex] = result[columnIndex] || [];
      result[columnIndex][rowIndex] = columnValue;
    });
    return result;
  }, []);

  // get 9th row
  const lastRow = [];
  for (let number = SUDOKU_LARGEST_DIGIT; number > 0; number--) {
    for (let i = columnValues.length - 1; i > -1; i--) {
      if (columnValues[i].indexOf(number) === -1) {
        lastRow[i] = number;
        break;
      }
    }
  }
  output.push(lastRow);

  return output;
};

/**
 * Creates Sudoku solution and puzzle.
 *
 * @param  {Number} difficulty - A number between 0 and 1.
 *                               Lower means easier, higher means harder.
 * @return {Object}
 */
const createSudoku = difficulty => {
  const solution = generateSolution();
  const puzzle = solution.map(row =>
    row.slice().map(value => (Math.random() > difficulty ? value : null))
  );
  return { puzzle, solution };
};

export default createSudoku;

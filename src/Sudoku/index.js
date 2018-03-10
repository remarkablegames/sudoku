import { h, Component } from 'preact';
import { GA_DIFFICULTY_MULTIPLIER } from '../helpers/constants';
import createSudoku from '../helpers/sudoku';
import { trackEvent } from '../helpers/ga';
import './styles.css';

export default class Sudoku extends Component {
  state = {
    attempt: [],
    difficulty: 0.5,
    puzzle: [],
    solution: [],
    solutionJSON: '',
  };

  componentDidMount() {
    this.newPuzzle();
  }

  /**
   * Focuses puzzle cell when clicked.
   *
   * @param {SyntheticEvent}
   */
  handleCellClick({ target }) {
    target.select();
  }

  /**
   * Records user input.
   *
   * @param {SyntheticEvent}
   */
  handleCellChange = ({ target }) => {
    const { dataset: { x, y }, value } = target;
    if (!target.readOnly && value) {
      this.setState(state => {
        const attempt = state.attempt.map(row => row.slice());
        attempt[y][x] = parseInt(value, 10) || null;
        return { attempt };
      });
    }
  };

  /**
   * Navigates puzzle.
   *
   * @param {SyntheticEvent}
   */
  handleCellKeyDown = ({ key, target }) => {
    // Get x, y dataset from target element.
    let { x, y } = target.dataset;

    // Convert x and y to integers.
    x = parseInt(x, 10);
    y = parseInt(y, 10);

    switch (key) {
      case 'ArrowUp':
        y -= 1;
        break;
      case 'ArrowDown':
        y += 1;
        break;
      case 'ArrowLeft':
        x -= 1;
        break;
      case 'ArrowRight':
        x += 1;
        break;
      default:
        return;
    }

    const input = this.tbody.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (input) setTimeout(() => input.select());
  };

  /**
   * Checks if puzzle is solved.
   */
  checkSolution = () => {
    const { attempt, difficulty, solutionJSON } = this.state;
    console.log(JSON.stringify(attempt), solutionJSON);
    if (JSON.stringify(attempt) === solutionJSON) {
      trackEvent(
        'puzzle',
        'check',
        'solved',
        Math.round(difficulty * GA_DIFFICULTY_MULTIPLIER)
      );
      alert('Solved!');
    } else {
      trackEvent(
        'puzzle',
        'check',
        'unsolved',
        Math.round(difficulty * GA_DIFFICULTY_MULTIPLIER)
      );
      alert('Not solved.');
    }
  };

  /**
   * Clears puzzle attempt.
   */
  clearPuzzle = () => {
    trackEvent('puzzle', 'clear');
    this.setState(({ puzzle }) => ({
      attempt: puzzle.map(row => row.slice()),
    }));
  };

  /**
   * Generates a new puzzle.
   */
  newPuzzle = () => {
    this.setState(({ difficulty }) => {
      trackEvent(
        'puzzle',
        'new',
        undefined,
        Math.round(difficulty * GA_DIFFICULTY_MULTIPLIER)
      );
      const { puzzle, solution } = createSudoku(difficulty);
      return {
        attempt: puzzle.map(row => row.slice()),
        puzzle,
        solution,
        solutionJSON: JSON.stringify(solution),
      };
    });
  };

  /**
   * Changes puzzle difficulty.
   */
  changeDifficulty = ({ target }) => {
    this.setState(() => ({
      difficulty: Number(target.value),
    }));
  };

  render() {
    const { attempt, difficulty, puzzle } = this.state;
    return (
      <div>
        <table>
          <tbody ref={element => (this.tbody = element)}>
            {attempt.map((rows, y) => (
              <tr>
                {rows.map((digit, x) => (
                  <td>
                    <input
                      data-x={x}
                      data-y={y}
                      formnovalidate
                      maxlength="1"
                      onClick={this.handleCellClick}
                      onChange={this.handleCellChange}
                      onKeyDown={this.handleCellKeyDown}
                      pattern="[0-9]"
                      readonly={Boolean(puzzle[y][x])}
                      type="text"
                      value={digit}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button onClick={this.checkSolution}>Check Solution</button>&nbsp;
        <button onClick={this.clearPuzzle}>Clear Puzzle</button>
        <br />
        <br />
        <label>
          <small>Difficulty: </small>
          <input
            type="number"
            min={0}
            max={1}
            value={difficulty}
            onChange={this.changeDifficulty}
          />
        </label>&nbsp;
        <button onClick={this.newPuzzle}>New Puzzle</button>
      </div>
    );
  }
}

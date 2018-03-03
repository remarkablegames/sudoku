import { h, Component } from 'preact';
import './styles.css';

class Game extends Component {
  render() {
    return (
      <main className="center" role="main">
        <h1 className="heading text-center">Sudoku</h1>
      </main>
    );
  }
}

module.exports = Game;

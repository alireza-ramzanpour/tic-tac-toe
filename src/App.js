import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <>

      <TicTacToe
        themes={[ 'default', 'spring', 'summer', 'fall', 'winter']}
      />

    </>
  );
}

export default App;


import { Provider } from 'react-redux';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Scoreboard />
      </Provider>
    </div>
  );
}

export default App;

import './App.css';
import { Provider } from 'react-redux';

// this automatically looks for an index.js file:
import { store } from './redux/'

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
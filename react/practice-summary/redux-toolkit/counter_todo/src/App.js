import { Provider } from 'react-redux';
import store from './app/store';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <AddTodo />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
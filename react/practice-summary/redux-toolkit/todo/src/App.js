import './App.css';
import {Provider} from 'react-redux';
import store from './app/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo/>
        <Todos/>
      </Provider>
    </div>
  );
}

export default App;

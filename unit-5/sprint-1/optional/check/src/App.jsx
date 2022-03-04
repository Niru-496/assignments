import logo from './logo.svg';
import './App.css';
import { DisplayFun, Input_field } from './components/Test';

function App() {
  return (
    <div className='App'>
      {Input_field()}
      {DisplayFun()}
    </div>
  );
}

export default App;

import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Input handleChange={event => console.log(event)} />
      </header>
    </div>
  );
}

export default App;

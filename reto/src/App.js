import './App.css';
import Sidebar from './sidebar/sidebar';
import Contenido from './contenido/contenido';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <Contenido />
      </header>
    </div>
  );
}

export default App;

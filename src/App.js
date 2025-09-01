import './App.css';
import tonyStark from './tony_stark.jpg'; // Assuming the image is named tony_stark.jpg

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DEVOPS PROJECT</h1>
        <img src={tonyStark} alt="Tony Stark" style={{ width: '400px', borderRadius: '10px' }} />
      </header>
    </div>
  );
}

export default App;

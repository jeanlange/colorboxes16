import './App.css';
import Box from './Box.js';

function App() {
  const max = 10000;
  const boxen = Array(max).fill(<Box />);
  return (
    <div className="boxen">
      {boxen}
    </div>
  );
}

export default App;

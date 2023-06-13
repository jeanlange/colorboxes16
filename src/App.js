import './App.css';
import Box from './Box.js';

function App() {
  const max = 100;
  const boxen = Array(max).fill().map((_, i)=> (<Box key={i} />));
  return (
    <div className="boxen">
      {boxen}
    </div>
  );
}

export default App;

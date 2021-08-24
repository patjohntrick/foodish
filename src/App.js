import './App.css';
import Navbar from './components/Navbar.js';
import Introduction from './components/Introduction.js';
import Firstsection from './components/Firstsection.js';
import Secondsection from './components/Secondsection.js';
import Thirdsection from './components/Thirdsection.js';
import Fourthsection from './components/Fourthsection.js';
import Fifthsection from './components/Fifthsection.js';
import Sixsection from './components/Sixsection.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Sixsection />
    </div>
  );
}

export default App;

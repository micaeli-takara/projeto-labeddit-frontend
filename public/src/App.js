import './App.css';
import GlobalStates from './context/GlobalStates';

import Router from './routes/Router';

function App() {
  return (
    <div>
      <GlobalStates>
        <Router />
      </GlobalStates>
    </div>
  );
}

export default App;

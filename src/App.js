import { GlobalStyle } from './GlobalStyle';
import GlobalStates from './context/GlobalStates';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <GlobalStates>
        <GlobalStyle />
        <Router />
      </GlobalStates>
    </div>
  );
}

export default App;

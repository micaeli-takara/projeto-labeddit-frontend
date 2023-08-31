import Router from "./routes/Router";
import { GlobalStyle } from "./GlobalStyle";
import { GlobalStates } from "./contexts/GlobalState";

function App() {
  return (
    <>
      <GlobalStates>
        <GlobalStyle />
        <Router />
      </GlobalStates>
    </>
  );
}

export default App;

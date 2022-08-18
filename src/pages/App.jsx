import { Provider } from "react-redux";
import { Router, store } from "../config";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;

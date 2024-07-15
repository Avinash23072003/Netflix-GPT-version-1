import Body from "./components/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
function App() {
  return (
    <Provider store={AppStore}>
      <Body></Body>
    </Provider>
  );
}

export default App;

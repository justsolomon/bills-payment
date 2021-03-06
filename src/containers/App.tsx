import { Provider } from "react-redux";
import store from "redux/store";
import "styles/main.scss";
import AllPages from "./AllPages";

function App() {
  return (
    <Provider store={store}>
      <AllPages />
      <section id="modals-container"></section>
    </Provider>
  );
}

export default App;

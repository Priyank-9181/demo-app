import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import CakeRedux from "./HooksExample/reduxDemo/CakeRedux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeRedux />
    </Provider>

    // <ToDoMain />
  );
}

export default App;

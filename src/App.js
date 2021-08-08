import { Provider } from "react-redux";
import store from "./todo/redux/store";
import Todo from "./todo/todo";

function App() {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>




  );
}

export default App;

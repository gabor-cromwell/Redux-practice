import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(actions.decrement(-1));
  };

  const increment = () => {
    dispatch(actions.increment(1));
  };

  return (
    <div className="App">
      <h1>Counter application</h1>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

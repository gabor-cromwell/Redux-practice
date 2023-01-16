import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch({ type: "Decrement", payload: -1 });
  };

  const increment = () => {
    dispatch({ type: "Increment", payload: 1 });
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

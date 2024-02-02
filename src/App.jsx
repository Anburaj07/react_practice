import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import MovieList from "./components/MovieList";
import useWindowWidth from "./components/useWindowWidth";

function App() {
  let width=useWindowWidth()
  return (
    <div className="App">
      {/* <ExampleComponent />
      <p>Screen {width}px</p> */}
      <MovieList/>
    </div>
  );
}

export default App;

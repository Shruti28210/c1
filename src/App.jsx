import './App.css';

import {Books} from "./components/Books"
import {Pens} from "./components/Pens"
import {Notebooks} from "./components/Notebook"

function App() {
  return (
    <>
       <Books />
       <Pens />
       <Notebooks/>
    </>
  );
}

export default App;

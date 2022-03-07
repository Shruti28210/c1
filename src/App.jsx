import './App.css';

import {Books} from "./components/Books"
import {Pens} from "./components/Pens"
import {Notebooks} from "./components/Notebook"
import {Inkpens} from "./components/Inkpen"

function App() {
  return (
    <>
       <Books />
       <Pens />
       <Notebooks/>
       <Inkpens />
    </>
  );
}

export default App;

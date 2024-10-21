import "./App.css";

import { Bottles, Bottles4, Bottles3 } from "./components/Bottles/Bottles";

import { AllBook, Books, Bottle } from "./script";

// import * as func from './utility/Book/Book'
 
// import { Bottles } from './components/Bottles/Bottles'
// import Bottles from './components/Bottles/Bottles'

const MyBook = AllBook.Book3;
// console.log(MyBook())

function App() {
  return (
    <>
      <h2>Muhammad</h2>
      {AllBook.Book2()}
      <MyBook></MyBook>

      {/* <Book></Book> */}
      <Books></Books>
      <Bottle></Bottle>

      <Bottles></Bottles>
      <Bottles4></Bottles4>
      <Bottles3></Bottles3>
    </>
  );
}

export default App;

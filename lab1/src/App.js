import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function Greeting(){
  return (
    <h1>Welcome New Galaxy!</h1>
  )
}

function Response() {
  return (
    <h2>Thank You!</h2>
  );
} 

function App() {
  return (
    <>
      <Greeting />
      <Response />
    </>
  );
}

export default App;

//<Response />
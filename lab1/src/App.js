import React from "react";
import Greet from "./js/lab2/greeting.js";
import Resp from "./js/lab2/response.js";
import Lab3 from "./js/lab3/button.js";
import Carousel from "./js/lab4/carousel.js";

function App() {
  return (
    <>
      <div className="mx-20 my-4 space-y-2">
        <div classname="bg-red-300 hover:bg-red-700"/>
        <div classname="bg-green-300 hover:bg-green-700"/>
        <Greet />
        <Resp />
        <Lab3 />
        <div className="w-[600px] m-auto pt-11">
          <Carousel/>
        </div>
      </div>
    </>
  );
}

export default App;
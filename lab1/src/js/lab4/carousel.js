import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

let slides = [
  "https://vellum.myshopify.com/cdn/shop/products/Owl-IMG_3152.jpg?v=1432665578",
  "https://www.1zoom.me/prev/303/302250.jpg",
  "https://s1.1zoom.me/prev/450/449428.jpg",
  "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg",
  "https://www.researchgate.net/publication/221121660/figure/fig1/AS:393937056485384@1470933321643/Top-original-image-600-400-pixels-Bottom-two-representations-of-the-original.png ",
  "https://s1.1zoom.me/prev/341/340888.jpg",
];

function Carousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  let setLink = () => {
    switch(current){
      case 0:
        return "https://www.google.com";
      case 1:
        return "https://www.youtube.com";
      case 2:
        return "https://www.youtube.com/results?search_query=rick+astley";
      case 3:
        return "https://www.youtube.com/@RickAstleyYT";
      case 4:
        return "https://twitter.com/rickastley";
      default:
        return "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-40"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return (<img src={s} />);
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <a className="h-[80%] w-full" href={setLink()}></a>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500 opacity-60"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
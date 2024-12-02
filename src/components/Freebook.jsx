import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=free&key=AIzaSyDoGC7XzTYY1ubiDsKURWypiMZCu0xgbNc"
        );
        console.log(res.data.items);
        setBooks(res.data.items.filter(item => item.volumeInfo.imageLinks) || []);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col my-10">
        <div>
          <h1 className="text-xl font-semibold mb-2">Free Books</h1>
          <p className="mb-4 px-0 text-gray-700 text-lg leading-relaxed md:text-base md:leading-7">
            Support your learning journey with our comprehensive selection of educational books.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {books.map((item) => (
              <div key={item.id} className="p-2">
                <Cards item={item.volumeInfo} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;


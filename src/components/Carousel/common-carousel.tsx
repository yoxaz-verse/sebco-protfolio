import Image from 'next/image';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CommonCarousel = ({ CarouselData }: any) => {
  if (!CarouselData || CarouselData.length === 0) {
    return <h1 className='text-yellow-400'>No Images added</h1>;
  }

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      showArrows={true}
      swipeable={true}
      autoFocus={true}
      emulateTouch={true}
      centerMode={true}
      showIndicators={false}
      centerSlidePercentage={20}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              zIndex: 2,
              left: 15,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <FaChevronLeft className="text-2xl text-white" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              zIndex: 2,
              right: 15,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <FaChevronRight className="text-2xl text-white" />
          </button>
        )
      }
    >
      {CarouselData.map((item: any) => (
        <div key={item.data} className="relative p-2">
          <Image
            src={item.data}
            height={100}
            width={100}
            alt="slides"
            className='h-1/2 w-1/2 rounded-lg'
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CommonCarousel;

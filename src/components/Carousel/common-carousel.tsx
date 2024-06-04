import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const CommonCarousel = ({ CarouselData }: any) => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showArrows={true}
        swipeable={true}
        autoFocus={true}
        emulateTouch={true}
        dynamicHeight={true}
        //    autoPlay={true}
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
          <div key={item.alt} className="relative p-2   ">
            <Image
              src={item.src}
              height={400}
              width={400}
              alt="slides"
              className=" w-[60px]  rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CommonCarousel;

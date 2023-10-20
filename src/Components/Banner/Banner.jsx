import { AiOutlineArrowRight } from "react-icons/ai";
import image1 from "../../assets/images/imac1.jpg";
import image2 from "../../assets/images/imac2.jpg";
import image3 from "../../assets/images/macbook pro.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="w-full h-screen xl:h-[580px]"></div>
            <div className="absolute px-5 lg:px-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(255,71,86,0.65)] to-[rgba(60,49,219,0.57)]">
              <div className="flex flex-col-reverse lg:flex-row md:px-20 justify-between items-center gap-10 md:gap-5">
                <div className="lg:flex-1">
                  <h2 className="text-blue-600 text-4xl mb-4 font-font-kanit text-center md:text-left">
                    Apple Macbook Air
                  </h2>
                  <p className="font-font-lato font-bold  text-xl text-justify md:text-left">
                    Apples thinnest, lightest notebook, completely transformed
                    by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU
                    speeds up to 5x faster. Our most advanced Neural Engine for
                    up to 9x faster machine learning.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-8">
                    <Link
                      to="/products/apple"
                      href="#slide1"
                      className="btn btn-primary font-font-kanit"
                    >
                      Learn More{" "}
                      <AiOutlineArrowRight className="text-white text-[16px]" />
                    </Link>
                  </div>
                </div>
                <img className="lg:flex-1 lg:w-1/2" src={image3} alt="" />
              </div>
            </div>
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-1 right-1 lg:left-5 lg:right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="w-full h-screen xl:h-[580px]"></div>
            <div className="absolute px-5 lg:px-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(255,71,86,0.65)] to-[rgba(60,49,219,0.57)]">
              <div className="flex flex-col-reverse lg:flex-row md:px-20 justify-between items-center gap-10 md:gap-5">
                <div className="lg:flex-1">
                  <h2 className="text-blue-600 text-4xl mb-4 font-font-kanit text-center md:text-left">
                    Apple iMac
                  </h2>
                  <p className="font-font-lato font-bold  text-xl text-justify md:text-left">
                    iMac M1 and Powerful processors go hand in hand. Up to a
                    6-core Intel Core i7 Processor gives the 21.5 inch iMac all
                    the power you need for creating in Photoshop, Editing
                    videos, or making music.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-8">
                    <Link
                      to="/products/apple"
                      href="#slide1"
                      className="btn btn-primary font-font-kanit"
                    >
                      Learn More{" "}
                      <AiOutlineArrowRight className="text-white text-[16px]" />
                    </Link>
                  </div>
                </div>
                <img className="lg:flex-1 lg:w-1/2" src={image2} alt="" />
              </div>
            </div>
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-1 right-1 lg:left-5 lg:right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="w-full h-screen xl:h-[580px]"></div>
            <div className="absolute px-5 lg:px-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(255,71,86,0.65)] to-[rgba(60,49,219,0.57)]">
              <div className="flex flex-col-reverse lg:flex-row md:px-20 justify-between items-center gap-10 md:gap-5">
                <div className="lg:flex-1">
                  <h2 className="text-blue-600 text-4xl mb-4 font-font-kanit text-center md:text-left">
                    Apple iMac Pro Max
                  </h2>
                  <p className="font-font-lato font-bold  text-xl text-justify md:text-left">
                    iMac Pro Price in Bangladesh starts at 2,69,000 BDT with its
                    based model of 27-inch variant 5K display variant. The pro –
                    iMac price in BD sometimes goes up to 3,00,000 BDT for
                    different variants.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-8">
                    <Link
                      to="/products/apple"
                      href="#slide1"
                      className="btn btn-primary font-font-kanit"
                    >
                      Learn More{" "}
                      <AiOutlineArrowRight className="text-white text-[16px]" />
                    </Link>
                  </div>
                </div>
                <img className="lg:flex-1 lg:w-1/2" src={image1} alt="" />
              </div>
            </div>
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-1 right-1 lg:left-5 lg:right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { AiOutlineArrowRight } from "react-icons/ai";
import image1 from "../../assets/images/imac1.jpg";
import image2 from "../../assets/images/imac2.jpg";
import image3 from "../../assets/images/macbook pro.jpg";
import image4 from "../../assets/images/iphone14.jpg";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <div className="md:flex gap-2">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={image2} className="w-full h-[510px]" />
            <div className="absolute px-5 lg:px-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(32,32,32,0.44)] to-[rgba(40,40,40,0.43)]">
              <div>
                <h2 className="text-blue-600 text-4xl text-center mb-7 font-font-kanit">
                  Apple iMac
                </h2>
                <p className="text-white font-font-lato font-bold text-center text-xl ">
                  iMac M1 and Powerful processors go hand in hand. Up to a{" "}
                  <br /> 6-core Intel Core i7 Processor gives the 21.5 inch iMac
                  all the power you need for <br /> creating in Photoshop,
                  Editing videos, or making music.
                </p>
                <div className="flex justify-center mt-5 md:hidden">
                  <a href="#slide2" className="btn btn-primary font-font-kanit">
                    <AiOutlineArrowRight className="text-white text-[16px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-1 right-1 lg:left-5 lg:right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text-white hover:text-black"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text-white hover:text-black"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={image1} className="w-full h-[510px]" />
            <div className="absolute px-5 lg:px-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(32,32,32,0.44)] to-[rgba(40,40,40,0.43)]">
              <div>
                <h2 className="text-blue-600 text-4xl text-center mb-7 font-font-kanit">
                  Apple iMac Pro Max
                </h2>
                <p className="text-white font-font-lato font-bold text-center text-xl ">
                  iMac Pro Price in Bangladesh starts at 2,69,000 BDT with its
                  based model of 27-inch variant <br /> 5K display variant. The
                  pro – iMac price in BD sometimes goes up to <br /> 3,00,000
                  BDT for different variants.
                </p>
                <div className="flex justify-center mt-5 md:hidden">
                  <a href="#slide3" className="btn btn-primary font-font-kanit">
                    <AiOutlineArrowRight className="text-white text-[16px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-1 right-1 lg:left-5 lg:right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-white hover:text-black"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text-white hover:text-black"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={image3} className="w-full h-[510px]" />
            <div className="absolute px-5 lg:px-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(32,32,32,0.44)] to-[rgba(40,40,40,0.43)]">
              <div>
                <h2 className="text-blue-600 text-4xl text-center mb-7 font-font-kanit">
                  Apple Macbook Air
                </h2>
                <p className="text-white font-font-lato font-bold text-center text-xl ">
                  Apples thinnest, lightest notebook, completely transformed by
                  the Apple M1 chip. <br /> CPU speeds up to 3.5x faster. GPU
                  speeds up to 5x faster. Our most advanced <br /> Neural Engine
                  for up to 9x faster machine learning.
                </p>
                <div className="flex justify-center mt-5 md:hidden">
                  <a href="#slide1" className="btn btn-primary font-font-kanit">
                    <AiOutlineArrowRight className="text-white text-[16px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-1 right-1 lg:left-5 lg:right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text-white hover:text-black"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-white hover:text-black"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative mx-2 md:mx-0">
          <img src={image4} className="w-full h-full" alt="iphone" />
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-gradient-to-b from-[rgba(0,0,0,0.54)] to-[rgba(5,5,5,0.42)] p-10 font-font-lato">
            <div className="w-full space-y-5 text-center">
              <h3 className="text-center font-font-kanit text-white text-3xl">
                Iphone 14 pro max
              </h3>
              <p className="text-white">The brand new product from Apple</p>
              <p className="text-white">
                The Apple iPhone 14 Pro Max is the most advanced smartphone in
                the Pro Max series, offering an incredible user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

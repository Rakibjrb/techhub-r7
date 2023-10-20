import WelcomePic from "../../assets/images/technologyandelectronics.png";

const Welcome = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 mt-16">
      <div className="lg:flex items-center lg:gap-10 xl:gap-14">
        <div className="flex-1">
          <img className="rounded-xl" src={WelcomePic} alt="Welcome picture" />
        </div>
        <div className="flex-1 mt-5 lg:mt-0">
          <div className="lg:w-[336px]">
            <h2 className="text-3xl font-font-lato font-bold text-center">
              Welcome to <span className="text-blue-500">Techhub</span> BD
            </h2>
            <div className="flex justify-center mt-3 lg:hidden">
              <div className="w-24 h-1 bg-blue-700 rounded-md"></div>
            </div>
          </div>
          <p className="text-justify md:text-left mt-4">
            We are your go-to resource for the latest tech news, in-depth
            product reviews, how-to guides, and insights into the ever-evolving
            world of technology. Whether you are a gadget enthusiast, a DIY
            electronics hobbyist, or someone looking to stay informed about the
            tech landscape in Bangladesh, Tech Hub BD is here to keep you
            connected and up to date. Join us as we explore the exciting realm
            of innovation, one byte at a time.
          </p>
          <p className="mt-3 text-justify md:text-left">
            Our mission is to empower you with knowledge, so you can navigate
            the ever-evolving tech landscape with confidence. Join us on this
            exciting journey into the world of innovation and digital
            transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

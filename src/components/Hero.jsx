import Button from "./Button";

const Hero = ({}) => {
  return (
    <>
      <div className="theme-background">
        <div className="min-h-screen flex flex-col lg:flex-row items-center mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4 text-white ">
          <div className="left flex-1 ">
            <h2 className="text-3xl md:text-4xl lg:text-[50px] poppins bold">
              Contact Us
            </h2>
            <p className="py-4">
              Get in touch with our team to discuss how we can help transform
              your business. We’re here to help.
            </p>
            <Button text={"Contact Us"} />
          </div>
          <div className="right flex-1 ">
            <img src="./contact_us_banner2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

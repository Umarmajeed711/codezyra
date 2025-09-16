import Button from "./Button";

const Hero = ({ data }) => {
  return (
    <>
      <div className=" min-h-screen mx-4 md:mx-8 lg:mx-10 lg:p-6  p-4 flex flex-col md:flex-row md:justify-between  items-center gap-2  text-white ">
        <div className="left flex-1 pe-12 ">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] poppins bold">
            {data.title}
          </h2>
          <p className="py-4">{data.description}</p>
          <Button text={data.btnText} />
        </div>
        <div className="right flex-1 w-[350px] md:w-full pe-4 flex justify-end">
          <img className="max-w-[500px] h-[450px]" src={data.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;

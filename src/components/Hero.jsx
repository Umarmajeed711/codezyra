import Button from "./Button";

const Hero = ({ data }) => {
  return (
    <>
      <div className=" mx-4 md:mx-8 lg:mx-10 lg:p-6 p-4 flex flex-col md:flex-row md:justify-between items-center gap-4  text-white ">
        <div className="left flex-1 pe-12 ">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] poppins bold">
            {data.title}
          </h2>
          <p className="py-4">{data.description}</p>
          <Button text={data.btnText} />
        </div>
        <div className="right flex-1 w-[350px] md:w-full ">
          <img className="max-w-[500px] h-auto" src={data.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;


import HeroSection from "../sections/HeroSection";

const Contact = () => {
   const contactData = {
     title: "Contact Us",
     description:
       "Get in touch with our team to discuss how we can help transform your business.We’re here to help.",
     btnText: "Get in touch with us",
     img: "./contact_us_banner2.png",
   };
  return (
    <>
      <div>
        <HeroSection data={contactData} />
      </div>
    </>
  );
};

export default Contact;

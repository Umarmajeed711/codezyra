
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";

const Contact = () => {
   const contactData = {
     title: "Contact Us",
     description:
       "Get in touch with our team to discuss how we can help transform your business.We’re here to help.",
     btnText: "Get in touch with us",
     img: "https://www.kindpng.com/picc/m/207-2075249_call-center-customer-service-representative-service-customer-service.png",
   };
  return (
    <>
      <main className="">
        <HeroSection data={contactData} />
        <ContactSection />
      </main>
    </>
  );
};

export default Contact;

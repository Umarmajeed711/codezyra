import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [phone, setPhone] = useState("");

  return (
    
      
      <PhoneInput
        country={"us"} // default country
        value={phone}
        onChange={setPhone}
        inputStyle={{ width: "100%", height: "40px" }}
      />
      
    
  );
};

export default ContactForm;

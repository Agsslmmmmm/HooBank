import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-3xl outline-none ${styles}`} data-aos='zoom-in-right' data-aos-duration='400'>
    Get Started
  </button>
);

export default Button;

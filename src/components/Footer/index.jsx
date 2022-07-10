import React from "react";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <div className="content has-text-centered">
        <p className="content has-text-weight-bold is-size-5">
          &copy; 2022 React QR Code Generator
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

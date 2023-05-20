import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

const Footer = () => (
  <div className="bg-color ">
    <div className="flex flex-col lg:flex-row justify-evenly px-20 lg:px-0  py-20  text-white">
      <div className="mb-10 lg:mb-0">
        <h1 className="font-regular font-bold text-3xl uppercase">
          Informations
        </h1>
        <h1 className="text">
          Transform your business with our AI-powered web applications and data
          science services.
        </h1>
      </div>
      <div className="mb-10 lg:mb-0">
        <h1 className="font-regular font-bold text-3xl uppercase">Address</h1>
        <div className="flex items-center">
          <p className="text-4xl mr-3">
            <MdLocationPin />
          </p>
          <p className="text text-2">
            Räfsgatan 36, <br /> 21633 Limhamn, <br /> Sweden
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-4xl mr-3">
            <MdPhone />
          </p>
          <a href="tel:+46 708698276" className="text">
            +46 708698276
          </a>
        </div>
        <div className="flex items-center">
          <p className="text-4xl mr-3">
            {" "}
            <MdEmail />
          </p>
          <a href="mailto: info@KodeEnd.com" className="text">
            info@KodeEnd.com
          </a>
        </div>
      </div>
      <div className="mb-10 lg:mb-0">
        <h1 className="font-regular font-bold text-3xl uppercase">Legals</h1>
        <Link to="/terms" className="text">
          Terms and Conditions
        </Link>{" "}
        <br />
        <Link to="/privacy" className="text">
          Privacy policy
        </Link>{" "}
        <br />
        <Link to="/gdpr" className="text">
          GDPR
        </Link>
      </div>
      <div>
        <h1 className="font-regular font-bold text-3xl uppercase">
          Social Links
        </h1>
        <div className="flex">
          <a
            className="text-4xl"
            target="_blank"
            href="https://www.facebook.com/KodeEnd"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="text-4xl"
            target="_blank"
            href="https://www.linkedin.com/company/shahnawaz-jinnah-53264567"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    <hr className="my-8 border-blue-gray-50 w-3/5 mx-auto" />

    <p className="text-white foo-size flex items-center justify-center pb-10 lg:flex-row flex-col md:flex-row text-lg gap-2">
      <FaRegCopyright />
      2023 All Rights Reserved By{" "}
      <span className="text-red-300 font-bold ">KodeEnd IT Solutions AB</span>
    </p>
  </div>
);

export default Footer;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import img from "../../../assets/images/about/1.jpg";
import "./About.css";
import { FcReading } from "react-icons/fc";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex flex-col  lg:flex-row lg:items-center px-10  lg:px-28 my-20">
        <div data-aos="zoom-in-right">
          <img
            className="image-size mx-auto lg:mx-0 rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={img}
            alt="nature image"
          />
        </div>
        <div data-aos="fade-left">
          <h1 className="who-text">Who we are?</h1>
          <h1 className="service-text font-bold">About us</h1>
          <h1 className="text-left mt-10 text-lg">
            At KodeEnd IT Solutions, we specialize in utilizing cutting-edge
            technologies such as computer vision, artificial intelligence, and
            web development to provide innovative solutions for our clients. Our
            team of experts are dedicated to delivering high-quality services
            that help companies optimize their operations and drive growth.
            Whether you're looking to streamline processes, improve customer
            engagement, or gain valuable insights, we have the expertise and
            experience to help you achieve your goals. Contact us today to learn
            more about how we can help you take your business to the next level.
          </h1>
          <Link to="/blogs">
            <div data-aos="fade-up" className="read-btn">
              <button className="tracking-widest">READ MORE</button>
              <span className="text-5xl">
                <FcReading />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default About;

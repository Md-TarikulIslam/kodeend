/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button, Carousel, Typography } from "@material-tailwind/react";
import "./Hero.css";
import img1 from "../../../assets/images/hero/img1.png";
import img2 from "../../../assets/images/hero/img2.png";
import img3 from "../../../assets/images/hero/img3.png";
import Service from "../Service/Service";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <Carousel transition={{ duration: 2 }} className=" ">
        <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
          <div data-aos="fade-right">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-4 px-5 lead font-bold text-3xl md:text-4xl lg:text-5xl "
            >
              Elevate Your Software <br />
              with <span className="text-red-300">KodeEnd IT Solutions</span>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 px-5 font-regular text-justify opacity-80"
            >
              Optimize your operations and decision making <br /> with our AI
              and data science services
            </Typography>
            <Link to="/services">
              {" "}
              <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">
                Read More
              </Button>
            </Link>
          </div>

          <div data-aos="fade-left" className="stage">
            <img
              src={img1}
              alt="image 1"
              className="h-full w-full mt-10 hero-image object-cover box bounce-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
          <div data-aos="fade-right">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-4 px-5 lead font-bold text-3xl md:text-4xl lg:text-5xl "
            >
              <span className="text-red-300">KodeEnd IT</span> is your <br />
              Intelligence solutions
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:mb-12 margin px-5 font-regular  text-justify opacity-80"
            >
              Unlock new opportunities and insights with our AI and <br /> data
              science-driven web solutions.
            </Typography>
            <Link to="/services">
              {" "}
              <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">
                Read More
              </Button>
            </Link>
          </div>

          <div data-aos="fade-left" className="stage">
            <img
              src={img2}
              alt="image 2"
              className="h-full w-full mt-10 hero-image object-cover box bounce-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
          <div data-aos="fade-right">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-4 px-5 lead font-bold text-3xl md:text-4xl lg:text-5xl "
            >
              Empower your business <br />
              with <span className="text-red-300"> KodeEnd IT Solutions</span>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 px-5 font-regular text-justify opacity-80"
            >
              Unlock new opportunities and insights with our <br /> AI and data
              science-driven web solutions.
            </Typography>
            <Link to="/services">
              {" "}
              <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">
                Read More
              </Button>
            </Link>
          </div>

          <div data-aos="fade-left" className="stage">
            <img
              src={img3}
              alt="image 3"
              className="h-full w-full mt-10 hero-image object-cover box bounce-2"
            />
          </div>
        </div>
      </Carousel>
      <Service></Service>
    </div>
  );
}

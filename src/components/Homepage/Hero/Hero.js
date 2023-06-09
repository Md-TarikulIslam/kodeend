/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button, Carousel, Typography } from "@material-tailwind/react";
import "./Hero.css";
import img1 from "../../../assets/images/hero/img1.png";
import img2 from "../../../assets/images/hero/img2.png";
import img3 from "../../../assets/images/hero/img3.png";
import Service from "../Service/Service";
import { Link, ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Hero() {
  return (
    <div>
       {/* <Helmet>
        <title>KodeEnd</title>
        <meta property="og:title" content="KodeEnd" />
        <meta property="og:description" content="Web Development is fun." />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kodeend.com/static/media/web.edeaeee737d4b19aa443.jpg"
        />
        <meta
          property="og:url"
          content="https://www.kodeend.com/"
        />
        <link rel="canonical" href="/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> */}
      <Carousel transition={{ duration: 1 }} className=" ">
        <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
          <div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-4 px-5 lead  font-bold text-3xl md:text-4xl lg:text-5xl "
            >
              Elevate Your Software{" "}
              <span className="break">
                <br />
              </span>
              with <span className="text-red-300">KodeEnd IT Solutions</span>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 px-5 font-regular text-justify opacity-80"
            >
              Optimize your operations and decision making{" "}
              <span className="break">
                <br />
              </span>{" "}
              with our AI and data science services
            </Typography>
            <Link to="/services">
              {" "}
              <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">
                Read More
              </Button>
            </Link>
          </div>

          <div className="stage">
            <img
              src={img1}
              alt="image 1"
              className="h-full w-full mt-10 hero-image object-cover box bounce-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly font-regular flex-col-reverse lg:flex-row bg-color">
          <div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-4 px-5 lead font-regular font-bold text-3xl md:text-4xl lg:text-5xl "
            >
              <span className="text-red-300">KodeEnd IT</span> is your{" "}
              <span className="break">
                <br />
              </span>
              Intelligence solutions
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:mb-12 margin px-5 font-regular  text-justify opacity-80"
            >
              Unlock new opportunities and insights with our AI and{" "}
              <span className="break">
                <br />
              </span>{" "}
              data science-driven web solutions.
            </Typography>
            <Link to="/services">
              {" "}
              <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">
                Read More
              </Button>
            </Link>
          </div>

          <div className="stage">
            <img
              src={img2}
              alt="image 2"
              className="h-full w-full mt-10 hero-image object-cover box bounce-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
          <div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-4 px-5 lead font-bold text-3xl md:text-4xl lg:text-5xl "
            >
              Empower your business{" "}
              <span className="break">
                <br />
              </span>
              with <span className="text-red-300"> KodeEnd IT Solutions</span>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 px-5 font-regular text-justify opacity-80"
            >
              Unlock new opportunities and insights with our{" "}
              <span className="break">
                <br />
              </span>{" "}
              AI and data science-driven web solutions.
            </Typography>
            <Link to="/services">
              {" "}
              <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">
                Read More
              </Button>
            </Link>
          </div>

          <div className="stage">
            <img
              src={img3}
              alt="image 3"
              className="h-full w-full mt-10 hero-image object-cover box bounce-2"
            />
          </div>
        </div>
      </Carousel>
      <Service></Service>
      <ScrollRestoration />
    </div>
  );
}

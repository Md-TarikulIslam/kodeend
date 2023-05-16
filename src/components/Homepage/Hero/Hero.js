/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button, Carousel, Typography } from "@material-tailwind/react";
import "./Hero.css";
import img1 from "../../../assets/images/hero/img1.png";
import Service from "../Service/Service";

export default function Hero() {
  return (
  <div>
      <Carousel transition={{ duration: 2 }} className=" ">
      <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
        <div>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 mt-4 px-5 text-3xl md:text-4xl lg:text-5xl "
          >
            Elevate Your Software <br />
            with KodeEnd IT Solutions
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 px-5 font-regular text-justify opacity-80"
          >
            Optimize your operations and decision making <br /> with our AI and
            data science services
          </Typography>
          <Button color="blue" size="lg" className="ml-5 mb-10 lg:mb-0">Read More</Button>
        </div>

       <div className="stage">
       <img
          src={img1}
          alt="image 1"
          className="h-full w-full mt-10 hero-image object-cover box bounce-2"
        />
       </div>
       
      </div>
      <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
        <div>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 mt-4 px-5 text-3xl md:text-4xl lg:text-5xl "
          >
            kodeEnd IT is your <br />
            Intelligence solutions
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 px-5 font-regular text-justify opacity-80"
          >
            Unlock new opportunities and insights with our AI and <br /> data
            science-driven web solutions.
          </Typography>
        </div>

        <img
          src={img1}
          alt="image 1"
          className="h-full w-full mt-10 hero-image object-cover"
        />
      </div>
      <div className="flex items-center justify-evenly flex-col-reverse lg:flex-row bg-color">
        <div>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 mt-4 px-5 text-3xl md:text-4xl lg:text-5xl "
          >
            Empower your business <br />
            with KodeEnd IT Solutions
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 px-5 font-regular text-justify opacity-80"
          >
            Unlock new opportunities and insights with our <br /> AI and data
            science-driven web solutions.
          </Typography>
        </div>

        <img
          src={img1}
          alt="image 1"
          className="h-full w-full mt-10 hero-image object-cover"
        />
      </div>
    </Carousel>
    <Service></Service>
  </div>
    
  );
}

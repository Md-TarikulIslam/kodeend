/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel, Typography } from "@material-tailwind/react";
import "./Hero.css";
import img1 from "../../../assets/images/hero/img1.png";

export default function Hero() {
  return (
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
        <Typography variant="lead" color="white" className="mb-12 px-5 font-regular text-justify opacity-80">
          It is not so much for its beauty that the forest makes a claim upon
          men&apos;s hearts, <br /> as for that subtle something,  that quality of air
          that emanation from old trees, <br /> that so wonderfully changes and renews
          a weary spirit.
        </Typography>
      </div>
     
        <img src={img1} alt="image 1" className="h-full w-full mt-10 hero-image object-cover" />
      </div>
      <img src={img1} alt="image 2" className="h-full w-full object-cover hero-image" />
      <img src={img1} alt="image 3" className="h-full w-full object-cover hero-image" />
    </Carousel>
  );
}
